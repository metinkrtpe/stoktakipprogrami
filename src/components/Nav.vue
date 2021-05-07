<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand"
        >Anasayfa

        <div>{{ $route.name }}</div>
        {{ currentRouteName }}
      </router-link>
      <div v-if="isLoggedIn()">
        <b-button
          v-b-toggle.sidebar-1
          id="btnSidebar"
          style="background: #2d3436"
          ><i class="fa fa-truck" aria-hidden="true"></i>Stok Takip</b-button
        >
        <b-sidebar id="sidebar-1" bg-variant="dark" text-variant="light" shadow>
          <div class="px-3 py-2">
            <div class="wrapper">
              <div class="sidebar">
                <div class="sidebar__inner">
                  <div class="profile_info">
                    <div class="profile_data">
                      <p class="name">STOK TAKİBİ</p>
                    </div>
                  </div>
                  <ul class="siderbar_menu">
                    <li>
                      <router-link to="/">
                        <div class="icon">
                          <i class="fa fa-home" aria-hidden="true">Anasayfa</i>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/depo">
                        <div class="icon">
                          <i class="fa fa-archive" aria-hidden="true">Depo</i>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/kategori">
                        <div class="icon">
                          <i class="fa fa-list" aria-hidden="true">Kategori</i>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="urun">
                        <div class="icon">
                          <i class="fa fa-shopping-bag" aria-hidden="true"
                            >Ürün</i
                          >
                        </div>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </b-sidebar>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto" v-if="!isLoggedIn()">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Giris Yap</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Kayit Ol</router-link>
          </li>
        </ul>
      </div>
      <div class="dropdownStyle">
        <b-dropdown
          id="dropdown-1"
          text="Profil"
          class="m-md-2"
          variant="dark"
          v-if="isLoggedIn()"
        >
          <b-dropdown-item
            ><i class="fa fa-user-circle-o" aria-hidden="true"></i
            >Hesabim</b-dropdown-item
          >
          <b-dropdown-item
            ><a href="javascript:void(0)" @click="handleClick" class="nav-link"
              ><i class="fa fa-sign-out" aria-hidden="true"></i>Çıkış</a
            ></b-dropdown-item
          >
        </b-dropdown>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Nav",
  methods: {
    handleClick() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/login");
    },
    isLoggedIn() {
      return localStorage.getItem("token") ? true : false;
    },
  },
  computed: {
    ...mapGetters(["user"]),
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
<style>
.dropdownStyle {
  margin-right: auto;
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
  background: #c23616;
  color: white;
}
</style>
