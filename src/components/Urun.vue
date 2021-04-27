<template>
  <div>
    <h6>Urun Listesi</h6>
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>kategoriId</th>
          <th>UrunAdi</th>
          <th>Aciklama</th>
          <th>Depo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.ÜrünAdı }}</td>
          <td>{{ product.Aciklama }}</td>
          <td>{{ product.kategoriId }}</td>
          <td>{{ product.Depo }}</td>
          <td>
            <button
              class="btn btn-sm btn-danger"
              @click="deleteProduct(product)"
            >
              Sil
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "urun",
  data() {
    return {
      products: [
        {
          id: 1,
          kategoriId: 1,
          ÜrünAdı: "Anakart",
          Aciklama: "",
          Depo: "Istanbul",
        },
        {
          id: 2,
          kategoriId: 1,
          ÜrünAdı: "Anakart",
          Aciklama: "",
          Depo: "Istanbul",
        },
        {
          id: 3,
          kategoriId: 2,
          ÜrünAdı: "Anakart",
          Aciklama: "",

          Depo: "Istanbul",
        },
        {
          id: 4,
          kategoriId: 5,
          ÜrünAdı: "Anakart",
          Aciklama: "",

          Depo: "Istanbul",
        },
      ],
    };
  },
  methods: {
    handleUpdate() {},
    deleteProduct(product) {
      this.products = this.products.filter(
        (productToFilter) => productToFilter.id !== product.id
      );
    },
  },
};
</script>
<style>
table,
tr,
td,
th {
  border-collapse: collapse;
}
table {
  width: 250%;
  margin: 1 auto;
  font-size: 1em;
  margin-left: -160px;
}
th,
td {
  padding: 10px;
}
thead tr {
  background: gray;
  color: white;
}
tbody tr {
  text-align: left;
}
tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}
tbody tr:hover {
  background: #ddd;
}
.depobilgi {
  margin-left: -160px;
}
.fa fa-refresh {
  background: black;
}
#depo-icon {
  margin-left: -160px;
  background-color: #20bf6b;
  color: white;
  width: 45;
  height: 50px;
  padding: 20px;
  border-radius: 12%;
}
</style>
