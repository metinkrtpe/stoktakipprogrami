<template>
  <div>
    <i class="fa fa-refresh" aria-hidden="true" id="depo-icon"></i>

    <h6 class="depobilgi">Depo Bilgileri</h6>
    <table class="depo">
      <thead>
        <tr>
          <th>Depo Adı</th>
          <th>Adres</th>
          <th>Açıklama</th>
          <th>İşlemler</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hizmet Deposu</td>
          <td>Istanbul</td>
          <td>Istanbul Depo</td>
          <td></td>
        </tr>
        <tr>
          <td>Bilgisayar Donanim</td>
          <td>Istanbul</td>
          <td>Istanbul Depo</td>
          <td></td>
        </tr>
        <tr>
          <td>Hatay</td>
          <td>Hatay</td>
          <td>Hatay</td>
          <td></td>
        </tr>
        <tr>
          <td>Ankara</td>
          <td>Ankara Depo</td>
          <td>Ankara</td>
          <td></td>
        </tr>
        <tr>
          <td>Istanbul</td>
          <td>Istanbul Depo</td>
          <td>Bilgisayar</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "depo",
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
