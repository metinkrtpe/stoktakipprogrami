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
	
    <div class="main-section">
		<div class="dashbord">
			<div class="icon-section">
				<i class="fa fa-users" aria-hidden="true"></i><br>
				<small>Kullanicilar</small>
				<p>5</p>
			</div>
			<div class="detail-section">
				<a href="#">Goster</a>
			</div>
		</div>
		<div class="dashbord dashbord-green">
			<div class="icon-section">
            <i class="fa fa-university" aria-hidden="true"></i><br>
				<small>Depolar</small>
				<p>5</p>
			</div>
			<div class="detail-section">
				<router-link to="/depo">Goster</router-link>
			</div>
		</div>
		<div class="dashbord dashbord-orange">
			<div class="icon-section">
            <i class="fa fa-envelope" aria-hidden="true"></i><br>
				<small>Kategoriler</small>
				<p>5</p>
			</div>
			<div class="detail-section">
				<router-link to="/kategori">Goster</router-link>
			</div>
		</div>
		<div class="dashbord dashbord-blue">
			<div class="icon-section">
            <i class="fa fa-bars" aria-hidden="true"></i><br>
				<small>Urunler</small>
				<p>10</p>
			</div>
			<div class="detail-section">
				<router-link to = "/urun">Goster</router-link>
			</div>
			</div>
		</div>
	</div>

</template>
<script>
    
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
.main-section{
	width:105%;
	margin:0 auto;
	text-align: center;
	padding: 0px 5px;
}
.dashbord{
	width:50%;
	display: inline-block;
	background-color: #e84118;
	color: white;
	margin-top: 50px;
    text-align: center;
    margin-left: -10px;
	
}
.icon-section i{
	font-size: 30px;
	padding:10px;
	border:1px solid #fff;
	border-radius:50%;
	margin-top:-25px;
	margin-bottom: 10px;
	background-color:#e84118;
}
.icon-section p{
	margin:0px;
	font-size: 20px;
	padding-bottom: 10px;
}
.detail-section{
	background-color: #c23616;
	padding: 5px 0px;
}
.dashbord .detail-section:hover{
	background-color: #5a5a5a;
	cursor: pointer;
}
.detail-section a{
	color:#fff;
	text-decoration: none;
}
.dashbord-green .icon-section,.dashbord-green .icon-section i{
	background-color: #26de81;
}
.dashbord-green .detail-section{
	background-color: #20bf6b;
}
.dashbord-orange .icon-section,.dashbord-orange .icon-section i{
	background-color: #0097e6;
}
.dashbord-orange .detail-section{
	background-color: #00a8ff;
}
.dashbord-blue .icon-section,.dashbord-blue .icon-section i{
	background-color: #fbc531;
}
.dashbord-blue .detail-section{
	background-color: #e1b12c;
}
.dashbord-red .icon-section,.dashbord-red .icon-section i{
	background-color:#E74C3C;
}
.dashbord-red .detail-section{
	background-color:#CF4436;
}
.dashbord-skyblue .icon-section,.dashbord-skyblue .icon-section i{
	background-color:#8E44AD;
}
.dashbord-skyblue .detail-section{
	background-color:#803D9B;
}
</style>
