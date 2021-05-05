<template>
  <div>
    <div class="wrapper">
      <div class="sidebar">
        <div class="bg_shadow"></div>
        <div class="sidebar__inner">
          <div class="close">
            <i class="fas fa-times"></i>
          </div>
          <div class="profile_info">
            <div class="profile_img">
              <i class="fa fa-truck" aria-hidden="true"></i>
              <img src="profile.png" alt="profile_img" />
            </div>
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
                  <i class="fa fa-shopping-bag" aria-hidden="true">Ürün</i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <UrunEkleme @add:product="addProduct" />

    <h6>Ürün Bilgileri</h6>
    <table class="table table-striped table-hover">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Kategori</th>
          <th>Ürün Adı</th>
          <th>Açıklama</th>
          <th>Depo</th>
          <th>Düzenleme</th>
          <th>Silme</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td v-if="updateId === product.id">
            <input
              v-model="product.id"
              type="text"
              class="form-control"
              id="id"
            />
          </td>
          <td v-else>
            {{ product.id }}
          </td>
          <td v-if="updateId === product.id">
            <input
              v-model="product.Kategori"
              type="text"
              class="form-control"
              id="kategori"
            />
          </td>
          <td v-else>
            {{ product.Kategori }}
          </td>
          <td v-if="updateId === product.id">
            <input
              v-model="product.ÜrünAdı"
              type="text"
              class="form-control"
              id="ürünAdı"
            />
          </td>
          <td v-else>
            {{ product.ÜrünAdı }}
          </td>
          <td v-if="updateId === product.id">
            <input
              v-model="product.Aciklama"
              type="text"
              class="form-control"
              id="aciklama"
            />
          </td>
          <td v-else>
            {{ product.Aciklama }}
          </td>
          <td v-if="updateId === product.id">
            <input
              v-model="product.Depo"
              type="text"
              class="form-control"
              id="depo"
            />
          </td>
          <td v-else>
            {{ product.Depo }}
          </td>
          <td v-if="updateId !== product.id">
            <button class="btn btn-warning" @click="handleUpdate(product)">
              Güncelle
            </button>
          </td>
          <td v-else>
            <button class="btn btn-sm btn-success" @click="handleSave(product)">
              Kaydet
            </button>
            <button class="btn btn-sm btn-danger" @click="updateId = null">
              Iptal Et
            </button>
          </td>
          <td>
            <button class="btn btn-danger" @click="deleteProduct(product)">
              Sil
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import UrunEkleme from "./UrunEkleme.vue";

export default {
  name: "urun",
  data() {
    return {
      products: [
        {
          id: 1,
          Kategori: "Bilgisayar",
          ÜrünAdı: "Lenova",
          Aciklama: "Frontend",
          Depo: "Istanbul",
        },
        {
          id: 2,
          Kategori: "Donanim",
          ÜrünAdı: "Klavye",
          Aciklama: "Backend",
          Depo: "Istanbul",
        },
        {
          id: 3,
          Kategori: "Bilgisayar",
          ÜrünAdı: "Macbook pro",
          Aciklama: "İnsan Kaynakları",
          Depo: "Istanbul",
        },
        {
          id: 4,
          Kategori: "Donanim",
          ÜrünAdı: "Anakart",
          Aciklama: "Test",
          Depo: "Istanbul",
        },
      ],
      updateId: null,
    };
  },
  components: {
    UrunEkleme,
  },
  methods: {
    handleUpdate(product) {
      this.updateId = product.id;
    },
    deleteProduct(product) {
      this.products = this.products.filter(
        (productToFilter) => productToFilter.id !== product.id
      );
    },
    handleSave(product) {
      this.$emit("update:product", product);
      this.updateId = null;
    },
    updateProduct() {},
    addProduct(product) {
      const newProduct = { ...product };
      this.products = [...this.products, newProduct];
    },
  },
  mounted() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/login");
    }
  },
};
</script>
<style scoped>
.table {
  margin-left: -115px;
}
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
  background: #c23616;
  color: white;
}
</style>
