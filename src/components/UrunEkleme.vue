<template>
  <div id="addForm">
    <form @submit.prevent="handleAdd">
      <div class="row">
        <div class="col-md-2">
          <label for="id">ID</label>
          <input
            v-model="product.id"
            type="text"
            class="form-control"
            id="id"
            placeholder="ID"
          />
        </div>
        <div class="col-md-2">
          <label for="Kategori">Kategori</label>
          <input
            v-model="product.Kategori"
            type="text"
            class="form-control"
            id="Kategori"
            placeholder="Kategori"
          />
        </div>
        <div class="col-md-2">
          <label for="ÜrünAdı">Ürün Adı</label>
          <input
            v-model="product.ÜrünAdı"
            type="text"
            class="form-control"
            id="ÜrünAdı"
            placeholder="Ürün"
          />
        </div>
        <div class="col-md-2">
          <label for="Aciklama">Açıklama</label>
          <input
            v-model="product.Aciklama"
            type="text"
            class="form-control"
            id="Aciklama"
            placeholder="Aciklama"
          />
        </div>
        <div class="col-md-2">
          <label for="Depo">Depo</label>
          <input
            v-model="product.Depo"
            type="text"
            class="form-control"
            id="Depo"
            placeholder="Depo"
          />
        </div>
        <button type="submit" class="btn btn-success" id="btnDuzenle">
          Ekle
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "UrunEkleme",
  data() {
    return {
      product: { id: "", Kategori: "", ÜrünAdı: "", Aciklama: "", Depo: "" },
    };
  },
  methods: {
    handleAdd() {
      this.$emit("add:product", this.product);
    },
  },
};
</script>
<style scoped>
#addForm {
  margin: auto;
}
.row {
  margin-left: auto;
  margin-right: auto;
  padding: -20px;
  margin-bottom: auto;
  margin-top: auto;
}
#btnDuzenle {
  width: auto;
  height: auto;
  margin-top: 30px;
}
</style>
