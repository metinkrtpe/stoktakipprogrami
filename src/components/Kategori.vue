<template>
  <div>
    <i class="fa fa-refresh" aria-hidden="true" id="iconstyle"></i>
    <p></p>
    <table class="depo">
      <thead>
        <tr>
          <th>Kategori Adı</th>
          <th>Açıklama</th>
          <th>Depo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bilgisayar</td>
          <td>Bilgisayar,laptop,etc.</td>
          <td></td>
        </tr>
        <tr>
          <td>Hizmet</td>
          <td>Hizmet Kategorisi</td>
          <td></td>
        </tr>
        <tr>
          <td>Hatay</td>
          <td>Hatay</td>
          <td></td>
        </tr>
        <tr>
          <td>Bilgisayar</td>
          <td>Bilgisayar</td>
          <td></td>
        </tr>
        <tr>
          <td>Adaptor</td>
          <td>Adaptor</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "kategori",
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
#iconstyle {
  margin-left: -160px;
  background-color: #20bf6b;
  color: white;
  width: 45;
  height: 50px;
  padding: 20px;
  border-radius: 12%;
}
</style>
