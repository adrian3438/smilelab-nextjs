'use client'

function useIndexNumber(currentPage:any, pageSize:number, totalCount:number, itemIndex:number) {
    const lastIndex = totalCount - (currentPage -1) * pageSize;
    return lastIndex - itemIndex;
}

export default useIndexNumber;