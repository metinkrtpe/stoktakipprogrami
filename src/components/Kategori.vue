<template>
<div class="wrapper">
    <div class="sidebar">
        <div class="bg_shadow"></div>
        <div class="sidebar__inner">
            <div class="close">
            <i class="fas fa-times"></i>
        </div>
        <div class="profile_info">
            <div class="profile_img" ><i class="fa fa-truck" aria-hidden="true"></i>
                <img src="profile.png" alt="profile_img">
            </div>
            <div class="profile_data">
                <p class="name">STOK TAKİBİ</p>  
            </div>
        </div>
        <ul class="siderbar_menu">
            <li><router-link to="/">
                <div class="icon"><i class="fa fa-home" aria-hidden="true"></i></div>
                <div class="title">Anasayfa</div>
                </router-link></li>  
                
            <li><router-link to="/stok">
                <div class="icon"><i class="fa fa-codepen" aria-hidden="true"></i></div>
                <div class="title">Stok</div>
                </router-link></li>  
            <li><router-link to="/depo">
                <div class="icon"><i class="fa fa-university" aria-hidden="true"></i></div>
                <div class="title">Depo</div>
                </router-link></li>  
            <li><router-link to="/kategori">
                <div class="icon"><i class="fa fa-list" aria-hidden="true"></i></div>
                <div class="title">Kategori</div>
                </router-link></li>  
            <li><router-link to="urun">
                <div class="icon"><i class="fa fa-shopping-bag" aria-hidden="true"></i></div>
                <div class="title">Ürün</div>
                </router-link></li>  
        </ul>
        
        </div>
    </div> 
    <i class="fa fa-refresh" aria-hidden="true" id ="iconstyle"></i>
    <table class = "depo">
        <thead>
            <tr>
                <th>Kategori Adi</th>
                <th>Aciklama</th>
                <th>Depo</th>
                
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Bilgisayar</td>
            <td>Bilgisayar,laptop,etc.</td>
            <td></td>
            </tr>
            <tr>
                <td>Hizmet</td>
                <td>Hizmet Kategorisi</td>
                <td></td>
            </tr>
            <tr>
                <td>Hatay</td>
                <td>Hatay</td>
                <td></td>
            </tr>
            <tr>
                <td>Bilgisayar</td>
                <td>Bilgisayar</td>
                <td></td>
            </tr>
            <tr>
                <td>Adaptor</td>
                <td>Adaptor</td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
export default {
    name: 'kategori'
}
</script>
<style>
.wrapper .sidebar__inner {
    width: 225px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background: #1e272e;
    z-index: 999;
    transition: all 0.3s ease;
}

.wrapper .sidebar__inner .profile_info {
    padding: 30px 50px;
    text-align: center;
}

.wrapper .sidebar__inner .profile_info .profile_img {
    width: 125px;
    margin: 0 auto 15px;
}
.wrapper .sidebar__inner .profile_info .profile_data .name {
    font-size: 22px;
    font-weight: 700;
    color: #fff;
}

.wrapper .sidebar__inner .siderbar_menu li a {
    padding: 10px 50px;
    display: block;
    height: 90px;
    position: relative;
    margin-bottom: 1px;
    color: white;
    text-align: center;
    text-transform: uppercase;
}
.wrapper .sidebar__inner .siderbar_menu li a:hover,
.wrapper .sidebar__inner .siderbar_menu li a.active {
    background:  #c23616;
    color: white;
}
table,
tr,
td,
th {
    
    border-collapse: collapse;
    
}
table {
    width: 250%;
    margin: 1 auto;
    font-size: 1em;
    margin-left: -160px;
}
th,
td {
    padding: 10px;
}
thead tr {
    background: gray;
    color: white;
}
tbody tr {
    text-align: left;
}
tbody tr:nth-child(even) {
    background-color: #f2f2f2;
}
tbody tr:hover {
    background: #ddd;
}
.depobilgi{
    margin-left: -160px;
}
#iconstyle{
    margin-left: -160px;
    background-color: #20bf6b;
    color: white;
    width: 50px;
    height: 30px;
    padding: 20px;
    
}
</style>