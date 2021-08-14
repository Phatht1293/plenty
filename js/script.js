
function nav_bar_load() {
    let menu = [
        { title: "item1",class:"nav_bar_load_items", url: "#home" , imgurl:"/img/nav-index-bar-items/item1.png"},
        { title: "item2",class:"nav_bar_load_items", url: "#home" , imgurl:"/img/nav-index-bar-items/item2.png"},
        { title: "item3",class:"nav_bar_load_items", url: "#home" , imgurl:"/img/nav-index-bar-items/item3.png"},
        { title: "item4",class:"nav_bar_load_items", url: "#home" , imgurl:"/img/nav-index-bar-items/item4.png"},
        { title: "item5",class:"nav_bar_load_items", url: "#home" , imgurl:"/img/nav-index-bar-items/item5.png"},
        { title: "item6",class:"nav_bar_load_items", url: "#home" , imgurl:"/img/nav-index-bar-items/item6.png"},
        { title: "item7",class:"nav_bar_load_items", url: "#home" , imgurl:"/img/nav-index-bar-items/item7.png"},
        { title: "item8",class:"nav_bar_load_items", url: "#home" , imgurl:"/img/nav-index-bar-items/item8.png"},
        { title: "item9",class:"nav_bar_load_items", url: "#home" , imgurl:"/img/nav-index-bar-items/item9.png"},
        { title: "item10",class:"nav_bar_load_items", url: "#home" , imgurl:"/img/nav-index-bar-items/item10.png"},
    
    ]       

    for (i = 0; i < menu.length; i++ ) {
        document.getElementById('nav_in_bar_cont').innerHTML += "<div class="+menu[i].class + "><a href=" + menu[i].url + ">" + "<img src="+ menu[i].imgurl + ">" + "</a></div>"
       
    }
}
nav_bar_load()

function main_content_items_load()
{
    let menu1 = [
        { title: "item1",class:"items_main", url: "#home" , imgurl:"/img/main-items/1.png"},
        { title: "item2",class:"items_main", url: "#home" , imgurl:"/img/main-items/2.png"},
        { title: "item3",class:"items_main", url: "#home" , imgurl:"/img/main-items/3.png"},
        { title: "item4",class:"items_main", url: "#home" , imgurl:"/img/main-items/4.png"},
        { title: "item5",class:"items_main", url: "#home" , imgurl:"/img/main-items/5.png"},
        { title: "item6",class:"items_main", url: "#home" , imgurl:"/img/main-items/6.png"},
        { title: "item7",class:"items_main", url: "#home" , imgurl:"/img/main-items/7.png"},
        { title: "item8",class:"items_main", url: "#home" , imgurl:"/img/main-items/8.png"},
        { title: "item9",class:"items_main", url: "#home" , imgurl:"/img/main-items/9.png"},
        { title: "item10",class:"items_main", url: "#home" , imgurl:"/img/main-items/10.png"},
        { title: "item11",class:"items_main", url: "#home" , imgurl:"/img/main-items/11.png"},
        { title: "item12",class:"items_main", url: "#home" , imgurl:"/img/main-items/12.png"},
        { title: "item13",class:"items_main", url: "#home" , imgurl:"/img/main-items/13.png"},
        { title: "item14",class:"items_main", url: "#home" , imgurl:"/img/main-items/14.png"},
        { title: "item15",class:"items_main", url: "#home" , imgurl:"/img/main-items/15.png"},
        { title: "item16",class:"items_main", url: "#home" , imgurl:"/img/main-items/16.png"},
        { title: "item17",class:"items_main", url: "#home" , imgurl:"/img/main-items/17.png"},
        { title: "item18",class:"items_main", url: "#home" , imgurl:"/img/main-items/18.png"},
        { title: "item19",class:"items_main", url: "#home" , imgurl:"/img/main-items/19.png"},
        { title: "item20",class:"items_main", url: "#home" , imgurl:"/img/main-items/20.png"},


    ]       

    for (i = 0; i < menu1.length; i++ ) {
        document.getElementById('main_content_items').innerHTML += "<div class="+menu1[i].class + "><a href=" + menu1[i].url + ">" + "<img width='245px' height='320px' src="+ menu1[i].imgurl + ">" + "</a><button>Thêm vào giỏ</button></div>"
       
    }
}

main_content_items_load()



function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("cover_popup").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("cover_popup").style.display = "none";

  }

 

 function login()
 {
     let acc_list=[
         {id:"acctest1",password:"123456@password",name:"Thuận Phát"},
         {id:"acctest2",password:"123456@password",name:"Uy Lê"},
         {id:"acctest3",password:"123456@password",name:"Trọng Phan"},
     ]
     let ip_id=document.getElementById('input_id').value
     let ip_pass=document.getElementById('input_password').value

     let temp =0
     check=false
     for (let i = 0; i < acc_list.length; i++) 
     {
        if(ip_id==acc_list[i].id&&ip_pass==acc_list[i].password)
        {
            temp=i
            check=true
            break
        }        
     }

     if(check==true)
     {
        document.getElementById('alt_header_login_success').innerHTML+="<a href='/userpage.html'> Xin chào, "+ acc_list[temp].name+" </a>";
        document.getElementById("myForm").style.display = "none";
        document.getElementById("cover_popup").style.display = "none";
       
     }
     else
     {
         alert('Sai tài khoản hoặc mặt khẩu !')
     }

} 

function close_ad()
{
    document.getElementById("cover_popup").style.display = "none";
    document.getElementById("ad_popup").style.display = "none";
}




function getRandomImg()
{
    let randomImage = []
    randomImage[0]="/img/pop_up_ads/1.png"
    randomImage[1]="/img/pop_up_ads/2.png"
    randomImage[2]="/img/pop_up_ads/3.png"
    randomImage[3]="/img/pop_up_ads/4.png"
    randomImage[4]="/img/pop_up_ads/5.png"
    
    var number = Math.floor(Math.random()*randomImage.length);

    return document.getElementById("result").innerHTML = '<a href=""><img src="'+randomImage[number]+'" class="ad_popup_img" /></a>';
}

getRandomImg()


