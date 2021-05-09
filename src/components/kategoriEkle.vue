<template>
  <div id="addForm">
    <b-button v-b-modal.modal-prevent-closing style="background: #2d3436"
      ><i class="fa fa-plus" aria-hidden="true"></i
    ></b-button>
    <b-modal
      hide-footer
      id="modal-prevent-closing"
      ref="modal"
      title="Kategori Ekle"
      @show="resetModal"
      @click="handleAdd"
    >
      <div>
        <form @submit.prevent="handleAdd">
          <b-form-group>
            <label for="id">ID</label>
            <b-form-input
              v-model="product.id"
              type="text"
              class="form-control"
              id="id"
              placeholder="ID değeri giriniz.."
            />
          </b-form-group>
          <b-form-group>
            <label for="Kategori">KATEGORİ</label>
            <b-form-input
              v-model="product.Kategori"
              type="text"
              class="form-control"
              id="Kategori"
              placeholder="Kategori adı giriniz.."
            />
          </b-form-group>
          <b-form-group>
            <label for="Aciklama">AÇIKLAMA</label>
            <b-form-input
              v-model="product.Aciklama"
              type="text"
              class="form-control"
              id="Aciklama"
              placeholder="Açıklama giriniz.."
            />
          </b-form-group>
          <button type="submit" class="btn btn-primary" id="btnDuzenle">
            Ekle
          </button>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "kategoriEkle",
  data() {
    return {
      product: { id: "", Kategori: "", Aciklama: "" },
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
#btnDuzenle {
  width: 100%;
}
</style>
