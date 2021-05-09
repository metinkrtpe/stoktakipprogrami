<template>
  <div>
    <DepoEkleme @add:product="addProduct" />
    <h6>Depo Bilgileri</h6>
    <table class="table table-striped table-hover">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Depo Adı</th>
          <th>Adres</th>
          <th>Aciklama</th>
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
              v-model="product.DepoAdi"
              type="text"
              class="form-control"
              id="depoAdi"
            />
          </td>
          <td v-else>
            {{ product.DepoAdi }}
          </td>
          <td v-if="updateId === product.id">
            <input
              v-model="product.Adres"
              type="text"
              class="form-control"
              id="adres"
            />
          </td>
          <td v-else>
            {{ product.Adres }}
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
            <button class="btn  btn-danger" @click="deleteProduct(product)">
              Sil
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import DepoEkleme from "./depoEkleme.vue";
export default {
  name: "depo",
  data() {
    return {
      products: [
        {
          id: 1,
          DepoAdi: "İskenderun Depo",
          Adres: "Denizciler",
          Aciklama: "Depostok",
        },
        {
          id: 2,
          DepoAdi: "İstanbul Depo",
          Adres: "Caglayan",
          Aciklama: "Depostok",
        },
        {
          id: 3,
          DepoAdi: "Antalya Depo",
          Adres: "Merkez",
          Aciklama: "Personel",
        },
        {
          id: 4,
          DepoAdi: "Ankara Depo",
          Adres: "Merkez",
          Aciklama: "Depostok",
        },
      ],
      updateId: null,
    };
  },
  components: {
    DepoEkleme,
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
<style>
.table {
  margin-left: auto;
  margin-right: auto;
}
</style>
