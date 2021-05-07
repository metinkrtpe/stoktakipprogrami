<template>
  <div>
    <main>
      <div class="cards">
        <div class="card-single">
          <div>
            <h1>5</h1>
            <router-link to="/" class="routerstyle">KULLANICILAR</router-link>
          </div>
          <div>
            <span class="fa fa-users" aria-hidden="true"></span>
          </div>
        </div>
        <div class="card-single2">
          <div>
            <h1>5</h1>
            <router-link to="/depo" class="routerstyle">DEPOLAR</router-link>
          </div>
          <div>
            <span class="fa fa-archive" aria-hidden="true"></span>
          </div>
        </div>
        <div class="card-single3">
          <div>
            <h1>5</h1>
            <router-link to="/kategori" class="routerstyle"
              >KATEGORİLER</router-link
            >
          </div>
          <div>
            <span class="fa fa-envelope-open-o"></span>
          </div>
        </div>
        <div class="card-single4">
          <div>
            <h1>10</h1>
            <router-link to="/urun" class="routerstyle">ÜRÜNLER</router-link>
          </div>
          <div>
            <span class="fa fa-bars"></span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>


export default {
  name: "Home",
  
  props: ["user"],
  mounted() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/login");
    }
  },
};
</script>
<style>
.card-single4 .detail-section {
  background-color: #e1b12c;
}
main {
  margin-top: 85px;
  padding: 2rem 1.5rem;
  min-height: calc(100vh - 90px);
}
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
}
.card-single {
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 2rem;
  border-radius: 2px;
  background: #e74c3c;
  width: 210px;
  margin-left: -70px;
}
.card-single2 {
  display: flex;
  justify-content: space-between;
  background: #1dd1a1;
  padding: 2rem;
  border-radius: 2px;
  color: #fff;
  width: 210px;
}
.card-single3 {
  display: flex;
  justify-content: space-between;
  background: #0abde3;
  padding: 2rem;
  border-radius: 2px;
  color: #fff;
  width: 210px;
}
.card-single4 {
  display: flex;
  justify-content: space-between;
  background: #ffbe76;
  padding: 2rem;
  border-radius: 2px;
  color: #fff;
  width: 210px;
}
.card-single div:last-child span {
  font-size: 3rem;
}
.card-single2 div:last-child span {
  font-size: 3rem;
}
.card-single3 div:last-child span {
  font-size: 3rem;
}
.card-single4 div:last-child span {
  font-size: 3rem;
}
.card-single div:first-child span {
  color: var(--text-grey);
}
.routerstyle {
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
}
.routerstyle:hover {
  color: black;
  text-decoration: none;
}
</style>
