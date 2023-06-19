// for loader
const overlay = document.getElementById("overlay")
window.addEventListener("load", () => {
  overlay.style.display = "none"
})
let music=new Audio('./assests/audios/1.mp3')

var User=localStorage.getItem('profile-name');
var profile=document.getElementById('userName');
profile.textContent=`HI ${User}`;

let image_user=localStorage.getItem('profile-image');
if(image_user==null){
  document.getElementById('profile_image').src = "./assests/images/Default_pfp.svg.png";
}
else{
document.getElementById('profile_image').src = image_user;
}



let light=localStorage.getItem('light_mood');
let moon =document.getElementById('moon')
let sun =document.getElementById('sun')

const EnableLightMood =()=>{
  document.body.classList.toggle('light_mood');
  localStorage.setItem('light_mood','enable')
}
const DisableLightMood =()=>{
  document.body.classList.toggle('light_mood');
  localStorage.setItem('light_mood', null)
}

moon.addEventListener('click',(e)=>{
      EnableLightMood();
      sun.style.cssText=`display:block`
      moon.style.cssText=`display:none`
})
sun.addEventListener('click',(e)=>{
  DisableLightMood()
      moon.style.cssText=`display:block;`
      sun.style.cssText=`display:none;`
})
 if(light=="enable"){
   EnableLightMood();
 }
 
 
 
const songs =[
    {
    id:1,
    songName:`on my way <br> <div class="title">Alan walker</div>`,
    poster:"./assests/images/1.jpg"
    },
    {
    id:2,
    songName:`where are u know <br> <div class="title">Alan walker</div>`,
    poster:"./assests/images/2.jpg"
    },
    {
    id:3,
    songName:`on and on <br> <div class="title" Pagali</div>`,
    poster:"./assests/images/3.jpg"
    },
    {
    id:4,
    songName:`music <br> <div class="title">Alan walker</div>`,
    poster:"./assests/images/4.jpg"
    },
    {
    id:5,
    songName:`fe hayatna nas <br> <div class="title">Amr diab</div>`,
    poster:"./assests/images/5.jpg"
    },
    {
    id:6,
    songName:`come baby come <br> <div class="title">Mohamed ramadan</div>`,
    poster:"./assests/images/6.jpg"
    },
    {
    id:7,
    songName:`wa'mel eih <br> <div class="title">Hamaki</div>`,
    poster:"./assests/images/7.jpg"
    },
    {
    id:8,
    songName:`ya salat elzen <br> <div class="title">Mohamed ramadan</div>`,
    poster:"./assests/images/8.jpg"
    },
    {
    id:9,
    songName:`rockabye <br> <div class="title">Anne marie</div>`,
    poster:"./assests/images/9.jpg"
    },
    {
    id:10,
    songName:`mi gente <br> <div class="title">willy william</div>`,
    poster:"./assests/images/10.jpg"
    },
    {
    id:11,
    songName:`come down<br> <div class="title">rema & selena</div>`,
    poster:"./assests/images/11.jpg"
    },
    {
    id:12,
    songName:`alo alyki <br> <div class="title">mohamed saad</div>`,
    poster:"./assests/images/12.jpg"
    },
    {
    id:13,
    songName:`lw <br> <div class="title">samer tarik</div>`,
    poster:"./assests/images/13.jpg"
    },
    {
    id:14,
    songName:`let me down slowly  <br> <div class="title">Alec bejamin </div>`,
    poster:"./assests/images/14.jpg"
    },
    {
    id:15,
    songName:`tom hi ho <br> <div class="title">lyrics</div>`,
    poster:"./assests/images/15.jpg"
    },
    {
    id:16,
    songName:`friends <br> <div class="title">Anne marie</div>`,
    poster:"./assests/images/16.jpg"
    },
    {
    id:17,
    songName:`don't give up <br> <div class="title">sia</div>`,
    poster:"./assests/images/17.jpg"
    },
    {
    id:18,
    songName:`don't you need somebody <br> <div class="title">Aseel & shaggy</div>`,
    poster:"./assests/images/18.jpg"
    },
    {
    id:19,
    songName:`da lw etsab <br> <div class="title">Amr diab</div>`,
    poster:"./assests/images/19.jpg"
    },
    {
    id:20,
    songName:`basrah w atoh <br> <div class="title">cairokee</div>`,
    poster:"./assests/images/20.jpg"
    },
    {
      id:21,
      songName:`Another Love <br> <div class="title">Tom Odell</div>`,
      poster:"./assests/images/21.jpg"
      },

    {
      id:22,
      songName:`some0ne like you <br> <div class="title">Adele</div>`,
      poster:"./assests/images/22.jpg"
    },
    {
      id:23,
      songName:`Matwhashneesh <br> <div class="title">Cairokee</div>`,
      poster:"./assests/images/23.jpg"
      },
    {
      id:24,
      songName:`My Heart Will Go On <br> <div class="title">Celine Dion</div>`,
      poster:"./assests/images/24.jpg"
      },  
    
    {
        id:25,
        songName:`  Dari Ya Alby<br> <div class="title">Hamza Namira </div>`,
        poster:"./assests/images/25.jpg"
    },  
    {
        id:26,
        songName:` El Waqaa El Akheera<br> <div class="title">Hamza Namira </div>`,
        poster:"./assests/images/26.jpg"
    },
    { 
        id:27,
        songName:` perfect<br> <div class="title" >Ed Sheeran</div>`,
        poster:"./assests/images/27.jpg"
    },

    {
        id:28,
        songName:`  Diamonds<br> <div class="title">Rihanna </div>`,
        poster:"./assests/images/28.jpg"
    },
    {
      id:29,
      songName:`Love Me Like You Do<br> <div class="title">Ellie Goulding </div>`,
        poster:"./assests/images/29.jpg"
    },
                    
    {
    id:30,
    songName:`Until I Found You<br> <div class="title">Stephen Sanchez </div>`,
    poster:"./assests/images/30.jpg"
    },
    {
      id:31,
      songName:`raded elsatr<br> <div class="title">Mohamed chahine</div>`,
      poster:"./assests/images/31.jpg"
      },

    {
      id:32,
      songName:`ta5ed el2al <br> <div class="title">Abd elrahman elgharawy</div>`,
      poster:"./assests/images/32.jpg"
    },
    {
      id:33,
      songName:`ymenken 5er <br> <div class="title">Ramy sabry</div>`,
      poster:"./assests/images/33.jpg"
      },
    {
      id:34,
      songName:` lw gay fe rego3 <br> <div class="title">farid</div>`,
      poster:"./assests/images/34.jpg"
      },  
    
    {
        id:35,
        songName:` zorof m3andany <br> <div class="title">wael gasar </div>`,
        poster:"./assests/images/35.jpg"
    },  
    {
        id:36,
        songName:` abl mawsalek<br> <div class="title">Muslime </div>`,
        poster:"./assests/images/36.jpg"
    },
    { 
        id:37,
        songName:` haga mestakhabia <br> <div class="title" >hamaki</div>`,
        poster:"./assests/images/37.jpg"
    },

    {
        id:38,
        songName:` ya araf<br> <div class="title">Ahmed saad</div>`,
        poster:"./assests/images/38.jpg"
    },

]

let  pop_song_left=document.getElementById('pop_song_left');
let  pop_song_right=document.getElementById('pop_song_right');
let  pop_song=document.getElementsByClassName('pop-song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft+=330;
})
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft-=330;
    })

    let pop_art_left=document.getElementById('pop_art_left');
    let  pop_art_right=document.getElementById('pop_art_right');
    let item=document.getElementsByClassName('item')[0];
    pop_art_right.addEventListener('click',()=>{
    item.scrollLeft+=330;
    })
    pop_art_left.addEventListener('click',()=>{
    item.scrollLeft-=330;
    })
    
    Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
        e.getElementsByTagName('img')[0].src=songs[i].poster;
        e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
    })
    Array.from(document.getElementsByClassName('itemList')).forEach((e,i)=>{
      e.getElementsByTagName('img')[0].src=songs[i].poster;
    })
   
    let masterPlay=document.getElementById('masterPlay');
    let wave=document.getElementById('wave');
    masterPlay.addEventListener('click',()=>{
        if(music.paused || music.currentTime <=0){
            music.play();
            wave.classList.add('active');
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
        }
        else{
            music.pause();
            wave.classList.remove('active');
            masterPlay.classList.add('fa-play');
            masterPlay.classList.remove('fa-pause');
        }
    });
        const MakeAllBackground=()=>{
            Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
                 el.style.background='rgb(105,105,105,.0)'
            })
        
        }
        const MakeAllPlay=()=>{
                Array.from(document.getElementsByClassName('playlistPlay')).forEach((el)=>{
                    el.classList.add('fa-circle-play');
                    el.classList.remove('fa-circle-pause');
                })
        }
    
    let index=0;
    let image_poster=document.getElementById('image_poster');
    let title=document.getElementById('title');
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
        e.addEventListener('click',(el)=>{
          let index=el.target.id;
          music.src=`./assests/audios/${index}.mp3`;
          image_poster.src=`./assests/images/${index}.jpg`;
          music.play();
          masterPlay.classList.remove('fa-play');
          masterPlay.classList.add('fa-pause');
          
          let titleSong= songs.filter((els)=>{
            return els.id==index;
          });
          titleSong.forEach(elss=>{
            let {songName}=elss;
            title.innerHTML=songName;
          });
          
          MakeAllBackground();
          Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)'
          MakeAllPlay()
          el.target.classList.remove('fa-circle-play');
          el.target.classList.add('fa-circle-pause');
          wave.classList.add('active');
        });
    });
    
    let currentRun=document.getElementById('currentRun');
    let currentEnd=document.getElementById('currentEnd');
    let range=document.getElementById('range'); 
    let secondRun=document.getElementById('secondRun');
    let circle=document.getElementsByClassName('circle')[0];
    
    music.addEventListener('timeupdate',()=>{
        let curr_music= music.currentTime;
        let dur_music= music.duration;
        let minute= Math.floor(dur_music/60);
        let second= Math.floor(dur_music%60);
        currentEnd.innerHTML=`${minute}:${second}`
        
        let minute2= Math.floor(curr_music/60);
        let second2= Math.floor(curr_music%60);
        currentRun.innerHTML=`${minute2}:${second2}`
        
        let progressRange=parseInt((curr_music/dur_music)*100);
        range.value=progressRange;
        secondRun.style.width=`${range.value}%`
        circle.style.left=`${range.value}%`
    })
    range.addEventListener('change',()=>{
          music.currentTime=range.value * music.duration/100;
    })
    
    let back=document.getElementById('back');
    let next=document.getElementById('next');
    
    back.addEventListener('click',()=>{
        index --;
        if(index < 1){
            index= Array.from(document.getElementsByClassName('songItem')).length;
        }
        music.src=`./assests/audios/${index}.mp3`;
          image_poster.src=`./assests/images/${index}.jpg`;
          music.play();
          masterPlay.classList.remove('fa-play');
          masterPlay.classList.add('fa-pause');
          
          let titleSong= songs.filter((els)=>{
            return els.id==index;
          });
          titleSong.forEach(elss=>{
            let {songName}=elss;
            title.innerHTML=songName;
          });
          
          MakeAllBackground();
          Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)'
          MakeAllPlay()
          el.target.classList.remove('fa-circle-play');
          el.target.classList.add('fa-circle-pause');
          wave.classList.add('active');
    });
    next.addEventListener('click',()=>{
        index ++;
        if(index > Array.from(document.getElementsByClassName('songItem')).length){
            index= 1;
        }
        music.src=`./assests/audios/${index}.mp3`;
          image_poster.src=`./assests/images/${index}.jpg`;
          music.play();
          masterPlay.classList.remove('fa-play');
          masterPlay.classList.add('fa-pause');
          
          let titleSong= songs.filter((els)=>{
            return els.id==index;
          });
          titleSong.forEach(elss=>{
            let {songName}=elss;
            title.innerHTML=songName;
          });
          
          MakeAllBackground();
          Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)'
          MakeAllPlay()
          el.target.classList.remove('fa-circle-play');
          el.target.classList.add('fa-circle-pause');
          wave.classList.add('active');
    })
  
    Array.from(document.getElementsByClassName('itemList')).forEach((e)=>{
      e.addEventListener('click',(el)=>{
        let index=el.target.id;
        music.src=`./assests/audios/${index}.mp3`;
        image_poster.src=`./assests/images/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        
        let titleSong= songs.filter((els)=>{
          return els.id==index;
        });
        titleSong.forEach(elss=>{
          let {songName}=elss;
          title.innerHTML=songName;
        });
        
        MakeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)'
        MakeAllPlay()
        el.target.classList.remove('fa-circle-play');
        el.target.classList.add('fa-circle-pause');
        wave.classList.add('active');
      });
    });
  
  
  let search_result=document.getElementsByClassName('search_result')[0];
  songs.forEach(e=>{
    const {id,poster,songName}=e;
    let card=document.createElement('a');
    card.classList.add('card');
    card.href=`#${id}`
    card.innerHTML=`
    <img src="${poster}" alt="">
    <div class="content">
      ${songName}
    </div>
    `
    search_result.appendChild(card);
  })
  let input = document.getElementsByTagName('input')[0];
  input.addEventListener("keyup", () => {
    let input_val=input.value.toUpperCase();
    let items=search_result.getElementsByTagName('a');
    
    for(let i=0;i<items.length;i++){
        let as=items[i].getElementsByClassName('content')[0];
        let text_val=as.textContent ||as.innerText;
        if(text_val.toLocaleUpperCase().indexOf(input_val)>-1){
           items[i].style.display="flex"
        }
        else{
          items[i].style.display="none"
        }
        
        if(input.value==0){
           search_result.style.display="none"
        }
        else  {search_result.style.display=""}
    }
  })
  
  
  
  let menu_list_active_btn=document.getElementById('menu_list_active_btn');
  let left_side=document.getElementsByClassName('left-side')[0];
  menu_list_active_btn.addEventListener('click',()=>{
     left_side.classList.toggle('translate');
     left_side.classList.add('unset');
     menu_list_active_btn.classList.add('WithoutOpacity');
     
  })
  
  
  let right_side=document.getElementsByClassName('right-side')[0];
  right_side.addEventListener('click',()=>{
    menu_list_active_btn.classList.add('WithOpacity');
    left_side.classList.add('translate');
     left_side.classList.remove('unset');
     
  })