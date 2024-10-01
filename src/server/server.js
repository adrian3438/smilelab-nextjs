const { createServer } = require('http');
const express = require('express');
const next = require('next');
const path = require('path');
const fs = require('fs');
const mysql = require('mysql2');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const connection = mysql.createConnection({
    host: '1.248.227.179',
    user: 'smilelab2024',
    password: 'adrian130322@',
    database: 'smilelab2024'
});

app.prepare().then(() => {
    const server = express();
    const httpServer = createServer(server);
    
    server.get('/api/lang', (req, res) => {
        const lang = req.query.lang;
        const filePath = path.join(__dirname, 'locale', lang, 'language.json');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if(err) {
                res.status(200).json({ error : 'not found' });
            }else{
                res.json(JSON.parse(data));
            }
        })
    });
    
    // 블로그 인기글 리스트 호출
    server.get('/api/popular-list', (req, res) => {
        const {lang} = req.query;
        const sql = `
        SELECT
        idx AS ID, 
        CONCAT('${fileUrl}', prom_thumnail_pdsFile) AS thumnailFile, 
        prom_name AS promSubject,
        DATE_FORMAT(prom_insert_date, '%Y-%m-%d') AS createDate
        FROM
        dots_promotion_detail
        WHERE
        prom_lang='${lang}'
        ORDER BY prom_view_cnt DESC
        LIMIT 3
        `;
        connection.query(sql , (err , result) => {
            if(err) {
                res.status(500).json({msg : 'error'}); return;
            }
            res.json({
                result : true , 
                list : result
            })
        })
    })

    const fileUrl = 'https://marineplaza.org/smilelab-api/upload/promotion/'

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    const port = process.env.PORT || 3000;

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }
        console.log('Connected to MySQL');
    });

    httpServer.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});