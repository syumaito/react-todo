//表示確認のため、変数をexportしてる。後日localStorageに保持して初期化しても残るようにする
export const listdata: string[][] = [];

export function ListData(listtext: string, liststime: string, listetime: string){
    listdata.push([listtext, liststime, listetime]);

}