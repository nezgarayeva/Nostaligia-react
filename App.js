import React, { useState } from 'react'
import "./index.css"

export default function App() {
  var [arr, setArr] = useState([
    {
      id:1,
      ad: "Ad günü",
      il: 1977,
      imdb: 7.8,
      janr: 'Dram',
      muddet: "71 dəqiqə",
      basRollar: ["Hacı İsmayılov", ", Şəfiqə Məmmədova", ", David Uplisaşvili"],
      url: "https://tvseans.az/uploads/frame/CdsLdoV-FzohKvuCUVDrvtSRoNSFb9II.jpg",
      backgroundUrl: "darkblue"
    }
    ,
    {
      id:2,
      ad: "Gün keçdi",
      il: 1971,
      imdb: 8.0,
      janr: 'Mehebbet',
      muddet: "83 dəqiqə",
      basRollar: ["	Leyla Şıxlinskaya", ", Həsən Məmmədov"],
      url: "https://aki.az/wp-content/uploads/2023/02/gun-2.jpg",
      backgroundUrl: "darkgreen"
    }
    ,
    { 
      id:3,
      ad: "Park",
      il: 1983,
      imdb: 9.0,
      janr: 'Mehebbet',
      muddet: "77.5 dəqiqə",
      basRollar: ["Fəxrəddin Manafov,", " Qalina Belyayeva"],
      url: "https://upload.wikimedia.org/wikipedia/az/thumb/6/6b/Park_%281984%29.JPG/525px-Park_%281984%29.JPG",
      backgroundUrl: "brown"
    }
    ,
    { 
      id:4,
      ad: "Təhminə",
      il: 1993,
      imdb: 8.6,
      janr: 'Melodram',
      muddet: "107.5 dəqiqə",
      basRollar: ["Fəxrəddin Manafov,", "Meral Konrat"],
      url: "https://m.media-amazon.com/images/M/MV5BMDZlNDUwYTctYzVjZC00MDRhLTllOTUtOTI0OGJlODcwOWQ4XkEyXkFqcGdeQXVyNDg4NTQxODA@._V1_.jpg",
      backgroundUrl: "darkblue"
    }
    ,
    { 
      id:5,
      ad: "Bizim Cəbiş Müəllim",
      il: 1993,
      imdb: 8.6,
      janr: 'Melodram',
      muddet: "107.5 dəqiqə",
      basRollar: ["Fəxrəddin Manafov,", "Meral Konrat"],
      url: "https://modern.az/file/articles/2015/08/12/179992.jpg",
      backgroundUrl: "purple"
    }
    ,
    { 
      id:6,
      ad: "Ölsəm bağışla",
      il: 1993,
      imdb: 10,
      janr: ['dram,',"məhəbbət"],
      muddet: "87 dəqiqə",
      basRollar: ["Fəxrəddin Manafov,", "Gülzar Qurbanova"],
      url: "https://medeniyyet.az/img/news/900x/_1657821881.jpg",
      backgroundUrl: "darkgreen"
    },
    { 
      id:7,
      ad: "Yuxu",
      il: 1993,
      imdb: 10,
      janr: ['dram,',"məhəbbət"],
      muddet: "87 dəqiqə",
      basRollar: ["Fəxrəddin Manafov,", "Gülzar Qurbanova"],
      url: "https://az.urban.az/assets/frontend/uploads/events/square/2019/02/08/9225984862557134.jpg",
      backgroundUrl: "darkorange"
    }
  ])

var [axtarilan,setAxtarilan]=useState("")
var handle=(e)=>{
  setAxtarilan(e.target.value)
  console.log(axtarilan)
}

var filtered=arr.filter((movie)=>movie.ad.toLowerCase().includes(axtarilan.toLowerCase()))

  return (
   
    <div>
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
       <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&family=DM+Serif+Display&family=Handjet:wght@400;500;600;700;800&family=Poppins:ital,wght@0,200;0,300;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&family=Roboto+Mono:ital,wght@0,300;1,500&family=Rubik+Iso&display=swap" rel="stylesheet"></link>
      <div className='search'>
        <div className='icon'> <h1>Nostaligia</h1> </div>
        <input type='text' placeholder='search...' onChange={handle} ></input>
        </div>
      {
        filtered.map((item) => {

          return (
            <div style={{ backgroundColor: item.backgroundUrl }}>
              

              <div className='film' key={item.id} >
                <h2 className='ad'>  {item.ad}</h2>
                <div className='text'>
                  <h2><span>İl:</span>{item.il}</h2>
                  <h2><span>IMDB:</span>{item.imdb}</h2>
                  <h2> <span>Janr:</span>{item.janr}</h2>
                  <h2><span>Müddet:</span>{item.muddet}</h2>
                  <h2><span>Baş Rollar:</span>{item.basRollar}</h2></div>
                <div className='image'></div>
                <img src={item.url}></img>
              </div> </div>)

        })
      }

    </div>
   
  )
}



