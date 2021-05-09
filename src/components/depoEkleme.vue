<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing style="background: #2d3436"
      ><i class="fa fa-plus" aria-hidden="true"></i
    ></b-button>
    <b-modal
      hide-footer
      id="modal-prevent-closing"
      ref="modal"
      title="Depo Ekle"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
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
          <label for="DepoAdi">DEPO ADI</label>
          <b-form-input
            v-model="product.DepoAdi"
            type="text"
            class="form-control"
            id="DepoAdi"
            placeholder="Depo adı giriniz.."
          />
        </b-form-group>
        <b-form-group>
          <label for="Adres">ADRES</label>
          <b-form-input
            v-model="product.Adres"
            type="text"
            class="form-control"
            id="Adres"
            placeholder="Adres giriniz.."
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
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "depoEkleme",
  data() {
    return {
      product: { id: "", DepoAdi: "", Adres: "", Aciklama: "" },
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
