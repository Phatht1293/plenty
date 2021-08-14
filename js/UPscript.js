let nav_bar_items=[
    {id:"#quanly_nhanvien_cont",name:"Quản lý nhân viên"},
    {id:"#quanly_sanpham_cont",name:"Quản lý sản phẩm"},
    {id:"#donvi_vanchuyen_cont",name:"Đơn vị vận chuyển"},
    {id:"/index.html",name:"Về trang chủ"}
]
/* Hiện navigation menu */
function show_nav_items()
{  
    for (let i = 0; i < nav_bar_items.length; i++) 
    {
        document.getElementById('nav_bar').innerHTML+=
        '<li id="list_nav"><strong><a  href = '+nav_bar_items[i].id +'>'
        +nav_bar_items[i].name+'</a></strong></li>'  
    }
}
show_nav_items()

/* Hiện danh sách nhân viên mẫu */
let staff_list=[
    {id:"nv1",name:"Trần Ngọc Yến Nhi",age:"22",position:"Nhân viên bán hàng",phone:"0945927887",timeserving:"8 A.M to 11 A.M",img:"/img/user_page/quanly_nhanvien/1.jpg",id_number:"048574782136"},
    {id:"nv2",name:"Lưu Tuệ Linh",age:"25",position:"Tạp vụ",phone:"0734756233",timeserving:"1 P.M to 4 P.M",img:"/img/user_page/quanly_nhanvien/2.jpg",id_number:"07445637633"},
    {id:"nv3",name:"Nguyễn Thị Ngọc Thanh",age:"31",position:"Thu ngân",phone:"0974265723",timeserving:"Full-time",img:"/img/user_page/quanly_nhanvien/3.jpg",id_number:"086743567623"},
]
function show_staff_list()
{
    for (let i = 0; i < staff_list.length; i++) 
    {
        document.getElementById('show_quanly_nhanvien').innerHTML+='<tr onclick="showback('+i+')"><td>'+
        staff_list[i].id+'</td><td><img src='+staff_list[i].img+'></td><td>'+
        staff_list[i].name+'</td><td>'+staff_list[i].age+'</td><td>'+
        staff_list[i].position+'</td><td>'+staff_list[i].phone+
        '</td><td>'+staff_list[i].timeserving+'</td><td>'+staff_list[i].id_number+'</td></tr>'       
    }
}
show_staff_list()

/* Thêm nhân viên */

function add_staff_list()
{
    let id=document.getElementById('ip_id').value;
    let na=document.getElementById('ip_name').value;
    let ag=document.getElementById('ip_age').value;
    let po=document.getElementById('ip_position').value;
    let ph=document.getElementById('ip_phone').value;
    let ti=document.getElementById('ip_timeserving').value;
    let im=document.getElementById('ip_image').value;
    let id_n=document.getElementById('ip_idnumber').value;
    let new_staff={
            'id':id,'name':na,'age':ag,'position':po,'phone':ph,'timeserving':ti,'img':im,'id_number':id_n
    }

    staff_list.push(new_staff)


    document.getElementById('show_quanly_nhanvien').innerHTML='<th>Mã nhân viên</th><th>Hình ảnh</th><th>Tên</th><th>Tuổi</th><th>Vị trí</th> <th>Số điện thoại</th><th>Thời gian làm việc</th><th>Số CMND/CCCD</th>'
    show_staff_list()


}
/* Trả thông tin về input */
function showback(a)
{    
    for (let i = 0; i < staff_list.length; i++) 
    {
        if(a==i)
        {
            document.getElementById('ip_id').value=staff_list[i].id
            document.getElementById('ip_name').value=staff_list[i].name
            document.getElementById('ip_age').value=staff_list[i].age
            document.getElementById('ip_position').value=staff_list[i].position
            document.getElementById('ip_phone').value=staff_list[i].phone
            document.getElementById('ip_timeserving').value=staff_list[i].timeserving
            document.getElementById('ip_image').value=staff_list[i].img
            document.getElementById('ip_idnumber').value=staff_list[i].id_number
            break
        }

    }
}
/* Sửa nhân viên */

function mod_staff()
{
    let id=document.getElementById('ip_id').value;
    let na=document.getElementById('ip_name').value;
    let ag=document.getElementById('ip_age').value;
    let po=document.getElementById('ip_position').value;
    let ph=document.getElementById('ip_phone').value;
    let ti=document.getElementById('ip_timeserving').value;
    let im=document.getElementById('ip_image').value;
    let id_n=document.getElementById('ip_idnumber').value;
    let new_staff={
            'id':id,'name':na,'age':ag,'position':po,'phone':ph,'timeserving':ti,'img':im,'id_number':id_n
    }
    for (let i = 0; i < staff_list.length; i++) 
    {
        if(new_staff.id==staff_list[i].id)
        {
            staff_list[i].id=id
            staff_list[i].age=ag
            staff_list[i].position=po
            staff_list[i].phone=ph
            staff_list[i].name=na
            staff_list[i].timeserving=ti
            staff_list[i].id_number=id_n
            staff_list[i].img=im
        }
        
    }

    document.getElementById('show_quanly_nhanvien').innerHTML='<th>Mã nhân viên</th><th>Hình ảnh</th><th>Tên</th><th>Tuổi</th><th>Vị trí</th> <th>Số điện thoại</th><th>Thời gian làm việc</th><th>Số CMND/CCCD</th>'
    show_staff_list()
}

/* Tìm nhân viên */

function search_staff()
{   let id=document.getElementById('ip_id').value;
    let na=document.getElementById('ip_name').value;
    let ag=document.getElementById('ip_age').value;
    let po=document.getElementById('ip_position').value;
    let ph=document.getElementById('ip_phone').value;
    let ti=document.getElementById('ip_timeserving').value;
    let im=document.getElementById('ip_image').value;
    let id_n=document.getElementById('ip_idnumber').value;
    let new_staff={
            'id':id,'name':na,'age':ag,'position':po,'phone':ph,'timeserving':ti,'img':im,'id_number':id_n
    }
    for (let i = 0; i < staff_list.length; i++) {
        if(new_staff.id==staff_list[i].id||new_staff.name==staff_list[i].name)
        {
            document.getElementById('show_quanly_nhanvien').innerHTML='<th>Mã nhân viên</th><th>Hình ảnh</th><th>Tên</th><th>Tuổi</th><th>Vị trí</th> <th>Số điện thoại</th><th>Thời gian làm việc</th><th>Số CMND/CCCD</th>'
    
            document.getElementById('show_quanly_nhanvien').innerHTML+='<tr><td>'+staff_list[i].id+
        '</td><td><img src='+staff_list[i].img+
        '></td><td>'+staff_list[i].name+
        '</td><td>'+staff_list[i].age+
        '</td><td>'+staff_list[i].position+
        '</td><td>'+staff_list[i].phone+
        '</td><td>'+staff_list[i].timeserving+
        '</td><td>'+staff_list[i].id_number+'</td></tr>'    
        break
        }
        
    }
}
/* Xóa nhân viên */

function delete_staff()
{
    let id=document.getElementById('ip_id').value;
    let na=document.getElementById('ip_name').value;
    let ag=document.getElementById('ip_age').value;
    let po=document.getElementById('ip_position').value;
    let ph=document.getElementById('ip_phone').value;
    let ti=document.getElementById('ip_timeserving').value;
    let im=document.getElementById('ip_image').value;
    let id_n=document.getElementById('ip_idnumber').value;
    let new_staff={
            'id':id,'name':na,'age':ag,'position':po,'phone':ph,'timeserving':ti,'img':im,'id_number':id_n
    }

    if(confirm('Bạn có chắc muốn xóa thông tin này ?'))
    {
        for (let i = 0; i < staff_list.length; i++) 
        {
           if(new_staff.id==staff_list[i].id)
           {
               staff_list.splice(i,1)           
           }
            
        }
        document.getElementById('show_quanly_nhanvien').innerHTML='<th>Mã nhân viên</th><th>Hình ảnh</th><th>Tên</th><th>Tuổi</th><th>Vị trí</th> <th>Số điện thoại</th><th>Thời gian làm việc</th><th>Số CMND/CCCD</th>'
    
        show_staff_list()     
    }   
}

/* Hiện danh sách sản phẩm mẫu */

let product_list=[
    {pro_id:"pdct1",pro_name:"Vải thiều Lục Ngạn",pro_type:"Thực phẩm",pro_img:"/img/main-items/1.png",pro_stock:"523",pro_sold:"237"},
    {pro_id:"pdct2",pro_name:"ĐT SS Galaxy Note 10",pro_type:"Đồ điện tử",pro_img:"/img/main-items/2.png",pro_stock:"35",pro_sold:"352"},
    {pro_id:"pdct3",pro_name:"ĐT Vsmart Joy 4",pro_type:"Đồ điện tử",pro_img:"/img/main-items/3.png",pro_stock:"345",pro_sold:"437"},
    {pro_id:"pdct4",pro_name:"XM Honda Vision 2021",pro_type:"Xe máy",pro_img:"/img/main-items/4.png",pro_stock:"21",pro_sold:"78"},
    {pro_id:"pdct5",pro_name:"Adapter Sạc Anker 18W",pro_type:"Đồ điện tử",pro_img:"/img/main-items/5.png",pro_stock:"345",pro_sold:"76"},
    {pro_id:"pdct6",pro_name:"Bảo hộ cho Thú cưng",pro_type:"Đồ Y tế",pro_img:"/img/main-items/6.png",pro_stock:"4657",pro_sold:"345"},
    {pro_id:"pdct7",pro_name:"Combo 5 chuột đồ chơi",pro_type:"Đồ Y tế",pro_img:"/img/main-items/7.png",pro_stock:"567",pro_sold:"345"},
    {pro_id:"pdct8",pro_name:"Khay vệ sinh cho mèo",pro_type:"Đồ Y tế",pro_img:"/img/main-items/8.png",pro_stock:"567",pro_sold:"234"},
]

function show_product_list()
{
    for (let i = 0; i < product_list.length; i++) 
    {
        document.getElementById('show_quanly_sanpham').innerHTML+='<tr onclick="getback_product('+i+')"><td><img src='+product_list[i].pro_img+'></td><td>'+product_list[i].pro_name+
        '</td><td>'+product_list[i].pro_id+'</td><td>'+product_list[i].pro_type+'</td><td>'+product_list[i].pro_stock+'</td><td>'+
        product_list[i].pro_sold+'</td></tr>'      
    }
}
show_product_list()

/* Tìm sản phẩm */

function search_product()
{   let type=document.getElementById('ip_product_type').value
    let name=document.getElementById('ip_product_name').value
    let id=document.getElementById('ip_product_id').value
    let add=""
    for (let i = 0; i < product_list.length; i++) 
    {       
        if(id==product_list[i].pro_id||name==product_list[i].pro_name||type==product_list[i].pro_type)
        {
            add+='<tr><td><img src='+product_list[i].pro_img+'></td><td>'+product_list[i].pro_name+
            '</td><td>'+product_list[i].pro_id+'</td><td>'+product_list[i].pro_type+'</td><td>'+product_list[i].pro_stock+'</td><td>'+
            product_list[i].pro_sold+'</td></tr>'      
        }     
    }
    document.getElementById('show_quanly_sanpham').innerHTML='<th>Hình ảnh</th><th>Tên sản phẩm</th><th>Mã sản phẩm</th><th>Phân loại</th><th>Tồn kho</th><th>Đã bán</th>'
    document.getElementById('show_quanly_sanpham').innerHTML +=add
}

/* Nút nhập lại */

function del_ip()
{
    document.getElementById('ip_product_id').value=""
    document.getElementById('ip_product_name').value=""
    document.getElementById('ip_product_img').value=""
    document.getElementById('ip_product_stock').value=""
    document.getElementById('ip_product_sold').value=""
}

/* Thêm sản phẩm */

function add_new_product()
{
    let id=document.getElementById('ip_product_id').value
    let name=document.getElementById('ip_product_name').value
    let type=document.getElementById('ip_product_type').value
    let img=document.getElementById('ip_product_img').value
    let stock=document.getElementById('ip_product_stock').value
    let sold=document.getElementById('ip_product_sold').value
    let new_product={
        'pro_id':id,'pro_name':name,'pro_type':type,'pro_img':img,'pro_stock':stock,'pro_sold':sold
    }
    product_list.push(new_product)
    document.getElementById('show_quanly_sanpham').innerHTML='<th>Hình ảnh</th><th>Tên sản phẩm</th><th>Mã sản phẩm</th><th>Phân loại</th><th>Tồn kho</th><th>Đã bán</th>'
    show_product_list()
}

/* Trả thông tin về input */

function getback_product(a)
{
    for (let i = 0; i < product_list.length; i++) {
        if(a==i)
        {
            document.getElementById('ip_product_id').value=product_list[i].pro_id
            document.getElementById('ip_product_name').value=product_list[i].pro_name
            document.getElementById('ip_product_type').value=product_list[i].pro_type
            document.getElementById('ip_product_img').value=product_list[i].pro_img
            document.getElementById('ip_product_stock').value=product_list[i].pro_stock
            document.getElementById('ip_product_sold').value=product_list[i].pro_sold
        }        
    }
}

/* Sửa sản phẩm */

function mod_product()
{
    let id=document.getElementById('ip_product_id').value
    let name=document.getElementById('ip_product_name').value
    let type=document.getElementById('ip_product_type').value
    let img=document.getElementById('ip_product_img').value
    let stock=document.getElementById('ip_product_stock').value
    let sold=document.getElementById('ip_product_sold').value
    let new_product={
        'pro_id':id,'pro_name':name,'pro_type':type,'pro_img':img,'pro_stock':stock,'pro_sold':sold
    }
    for (let i = 0; i < product_list.length; i++) {
        if(new_product.pro_id==product_list[i].pro_id || new_product.pro_name==product_list[i].pro_name)
        {
            product_list[i].pro_id=new_product.pro_id
            product_list[i].pro_name=new_product.pro_name
            product_list[i].pro_type=new_product.pro_type
            product_list[i].pro_img=new_product.pro_img
            product_list[i].pro_stock=new_product.pro_stock
            product_list[i].pro_sold=new_product.pro_sold
        }        
    }
    document.getElementById('show_quanly_sanpham').innerHTML='<th>Hình ảnh</th><th>Tên sản phẩm</th><th>Mã sản phẩm</th><th>Phân loại</th><th>Tồn kho</th><th>Đã bán</th>'
    show_product_list()
}

/* Xóa sản phẩm */

function delete_product()
{
    let id=document.getElementById('ip_product_id').value
    let name=document.getElementById('ip_product_name').value
    let type=document.getElementById('ip_product_type').value
    let img=document.getElementById('ip_product_img').value
    let stock=document.getElementById('ip_product_stock').value
    let sold=document.getElementById('ip_product_sold').value
    let new_product={
        'pro_id':id,'pro_name':name,'pro_type':type,'pro_img':img,'pro_stock':stock,'pro_sold':sold
    }
    if(confirm('Bạn có chắc chắn xóa sản phẩm này?'))
    {
        for (let i = 0; i < product_list.length; i++) {
            if(new_product.pro_id==product_list[i].pro_id || new_product.pro_name==product_list[i].pro_name)
            {
                product_list.splice(i,1)
            }           
        }
        document.getElementById('show_quanly_sanpham').innerHTML='<th>Hình ảnh</th><th>Tên sản phẩm</th><th>Mã sản phẩm</th><th>Phân loại</th><th>Tồn kho</th><th>Đã bán</th>'
        show_product_list()
    }    
}


/* Đơn vị vận chuyển */

let shipping_unit=[
    {name:"BEST Express",info:"",COD:""},
    {name:"Giao Hàng Nhanh",info:"",COD:"[COD đã được kích hoạt]"},
    {name:"Giao Hàng Tiết Kiệm",info:"",COD:"[COD đã được kích hoạt]"},
    {name:"NowShip",info:"",COD:"[COD đã được kích hoạt]"},
    {name:"Ninja Van",info:"",COD:"[COD đã được kích hoạt]"},
    {name:"Viettel Post",info:"",COD:"[COD đã được kích hoạt]"},
    {name:"VNPost Nhanh",info:"",COD:"[COD đã được kích hoạt]"},
    {name:"VNPost Tiết Kiệm",info:"",COD:""},
    {name:"J&T Express",info:"",COD:"[COD đã được kích hoạt]"},
    {name:"GrabExpress",info:"",COD:"[COD đã được kích hoạt]"},
]

function show_shipping_unit()
{
    for (let i = 0; i < shipping_unit.length; i++) 
    {
        document.getElementById('show_donvi_vanchuyen').innerHTML+='<div id="show_line_s_u"><h5 id="s_u_name">'+shipping_unit[i].name+
        '</h5><h5 id="s_u_cod">'+shipping_unit[i].COD+
        '</h5> <label class="switch"><input type="checkbox" checked><span class="slider round"></span></label> </div>'
        
    }
}
show_shipping_unit()