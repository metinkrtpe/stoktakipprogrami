<template>

<div class="wrapper">
    <h3 v-if="user">{{user.first_name}} {{user.last_name}}</h3>
    <h3 v-if="!user"></h3>
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
                <div class="icon"><i class="fa fa-home" aria-hidden="true">Anasayfa</i></div>
                
                </router-link></li>  
                
            <li><router-link to="/stok">
                <div class="icon"><i class="fa fa-cubes" aria-hidden="true">Stok</i></div>
                
                </router-link></li>  
            <li><router-link to="/depo">
                <div class="icon"><i class="fa fa-archive" aria-hidden="true">Depo</i></div>
                
                </router-link></li>  
            <li><router-link to="/kategori">
                <div class="icon"><i class="fa fa-list" aria-hidden="true">Kategori</i></div>
                
                </router-link></li>  
            <li><router-link to="urun">
                <div class="icon"><i class="fa fa-shopping-bag" aria-hidden="true">Ürün</i></div>
                
                </router-link></li>  
        </ul>
        </div>
    </div> 
    <main>
            <div class = "cards">
                <div class = "card-single">
                    <div>
                        <h1>5</h1>
                        <router-link to="/" class = "routerstyle">KULLANICILAR</router-link>
                    </div>
                    <div>
                        <span class = "fa fa-users" aria-hidden="true"></span>
                    </div>
                    
                </div>
                <div class = "card-single2">
                    <div>
                        <h1>5</h1>
                        <router-link to="/depo" class = "routerstyle">DEPOLAR</router-link>
                        
                    </div>
                
                    <div>
                        <span class = "fa fa-archive" aria-hidden = "true"></span>
                    </div>
                </div>
                <div class = "card-single3">
                    <div>
                        <h1>5</h1>
                        <router-link to="/kategori" class="routerstyle">KATEGORİLER</router-link>
                    </div>
                    <div>
                        <span class = "fa fa-envelope-open-o"></span>
                    </div>
                </div>
                <div class = "card-single4">
                    <div>
                        <h1>10</h1>
                        <router-link to ="/urun" class ="routerstyle">ÜRÜNLER</router-link>
                    </div>
                    
                    <div>
                        <span class = "fa fa-bars"></span>
                    </div>
                </div>
                

            </div>
        </main>
	</div>

</template>
<script>
export default{
    name: 'Home',
    props: ['user']
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





.card-single4 .detail-section{
	background-color: #e1b12c;
}
main {
            margin-top: 85px;
            padding: 2rem 1.5rem;
            min-height: calc(100vh - 90px);
        }
        .cards{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 2rem;
            margin-top: 1rem;
            margin-left: -130px;
        }
        .card-single{
            display: flex;
            justify-content: space-between;
            color: #fff;
            padding: 2rem;
            border-radius: 2px;
            background: #e74c3c;
            width: 210px;
            margin-left: -70px;
        }
        .card-single2{
            display: flex;
            justify-content: space-between;
            background: #1dd1a1;
            padding: 2rem;
            border-radius: 2px;
            color: #fff;
            width: 210px;
            
        }
        .card-single3{
            display: flex;
            justify-content: space-between;
            background: #0abde3;
            padding: 2rem;
            border-radius: 2px;
            color: #fff;
            width: 210px;
        }
        .card-single4{
            display: flex;
            justify-content: space-between;
            background: #ffbe76;
            padding: 2rem;
            border-radius: 2px;
            color: #fff;
            width: 210px;
        }
        .card-single div:last-child span{
            font-size: 3rem;
            
            
        }
        .card-single2 div:last-child span{
            font-size: 3rem;
            
            
        }
        .card-single3 div:last-child span{
            font-size: 3rem;
            
            
        }
        .card-single4 div:last-child span{
            font-size: 3rem;
            
            
        }
        .card-single div:first-child span {
            color: var(--text-grey);
            
        }
        .routerstyle{
            color: #fff;
            font-size: 1.2rem;
        }
        .routerstyle:hover{
            color: black;
            text-decoration: none;
        } 
        


</style>
