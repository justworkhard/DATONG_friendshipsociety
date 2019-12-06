import { getIndexList } from "@/service/api";

export async function getMenuList(params, Firsturl,leftMenu) {
  let url = '/second/menu'
  let navList = [];
  let useType = leftMenu || false
  
  await getIndexList(params).then(async res => {
    for (let index = 0; index < res.data.indexlist.length; index++) {
      const element = res.data.indexlist[index];
      if (useType || element.showWeb) {
        let temp = {};
        temp = {
          title: element.columnName,
          url: element.columnName === '首页'? Firsturl :
            url +
            `?title=${element.columnName}&id=${element.id}&parentId=${element.id}&ptCode=${params.ptCode}&indexUrl=${Firsturl}`,
          secondMenu: [],
          id: element.id,
          ptCode: element.ptCode
        };
        console.log(temp);
        
        await getIndexList({
          parentId: element.id,
          ptCode: params.ptCode
        }).then(res => {
      
          res.data.indexlist.forEach((item, index) => {
            // if (item.showWeb) {
              temp.secondMenu.push({
                title: item.columnName,
                url:
                  url +
                  `?parentId=${element.id}&ptCode=${params.ptCode}&currenId=${item.id}&indexUrl=${Firsturl}`,
                id: item.id,
                ptCode: element.item
              });
            // }
          });
          if (temp.secondMenu.length === 0&&temp.title !== '首页') {
            temp.url = temp.url + "&hadChild=fale" + `&currenId=${element.id}`;
          }
        });
        navList.push(temp);
      }
    }
  });

  return navList;
}
