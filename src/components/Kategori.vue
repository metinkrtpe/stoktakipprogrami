<template>
  <div>
    <sidebar />
    <h6>Kategori Bilgileri</h6>
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
import sidebar from "./sidebar.vue";
export default {
  name: "kategori",
  components: {
    sidebar,
  },
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
  },
};
</script>
<style>
.table {
  margin-left: auto;
  margin-right: auto;
}
</style>
