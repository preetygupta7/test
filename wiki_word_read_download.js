// let url= ["https://live.staticflickr.com/65535/53912002615_3509a036cc_c.jpg","https://live.staticflickr.com/65535/53912002615_3509a036cc_c.jpg"]
// let n=3

// const download=(e)=>{

// }
// import fs from "fs"
// import file from "../download/file"
// import { log } from "console"
// fs.readFileSync("../download/file.txt",(res)=>{

//   console.log( res,"sssssssss")

// })
// }
let n=3

const getUrl=(url)=>{
  return new Promise((resolve,reject)=>{
    const http=require('http')
    const https=require('https')

    let clients=http;

    if(url.toString().indexOf('https')==0){
      // console.log(url.toString().indexOf('https')===0){
        clients=https
        clients.get(url,(resp)=>{
        let data=''
        resp.on('data',(chunk)=>{
          data+=chunk;
        })
        resp.on('end',()=>{

          console.log(data," check the data")
          resolve(data)
        })
                  resp.pipe(data)

        resp.pipe("https://en.wikipedia.org/wiki/Concurrency")
        resp.unlink(data)
        resp.unlink("https://en.wikipedia.org/wiki/Concurrency")

      }).on('error',(err)=>{
        reject(err)
      })

     


    }

  })

}

for(let i=0;i<n;i++){

(async(url)=>{
  console.log(await getUrl(url)


)
})('https://en.wikipedia.org/wiki/Concurrency')

}
