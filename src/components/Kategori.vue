<template>
  <div>
    <KategoriEkle @add:product="addProduct" />
    <h6>Kategori Bilgileri</h6>
    <table class="table table-striped table-hover">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Kategori Adi</th>
          <th>Açıklama</th>
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
import KategoriEkle from "./kategoriEkle.vue";

export default {
  name: "kategori",
  data() {
    return {
      products: [
        {
          id: 1,
          Kategori: "Bilgisayar",
          Aciklama: "Frontend",
        },
        {
          id: 2,
          Kategori: "Donanim",
          Aciklama: "Backend",
        },
        {
          id: 3,
          Kategori: "Bilgisayar",
          Aciklama: "İnsan Kaynakları",
        },
        {
          id: 4,
          Kategori: "Donanim",
          Aciklama: "Test",
        },
      ],
      updateId: null,
    };
  },
  components: {
    KategoriEkle,
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
<style></style>
