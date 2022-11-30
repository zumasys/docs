<template>
  <div class="table">
    <div class="row">
      <a href="/rover/"
        ><img src="assets/img/rover-erp.png" alt="Rover ERP"
      /></a>
      <a href="/rover/rover-bi-overview"
        ><img src="assets/img/rover-bi.png" alt="Rover BI"
      /></a>
      <a href="/rover/rover-hub-overview"
        ><img src="assets/img/rover-hub.png" alt="Rover Hub"
      /></a>
    </div>
    <div class="spacer"><br /></div>
    <div class="spacer"><br /></div>
    <div class="row">
      <a href="/rover/rover-gateway-overview"
        ><img src="assets/img/rover-gateway.png" alt="Rover Gateway"
      /></a>
      <a href="/rover/rover-scan-overview"
        ><img src="assets/img/rover-scan.png" alt="Rover Scan"
      /></a>
      <a href="/rover/rover-marketplace-overview">
        <img src="assets/img/rover-marketplace.png" alt="Rover Marketplace"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductLogos",
};
</script>

<style scoped>
.img {
  margin: auto;
  display: block;
  width: 15%;
  height: 15%;
}

div.table {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-center;
  align-content: stretch;
  justify-content: center;
}

div.row a {
  flex-grow: 1;
  flex-basis: 30%;
  max-width: 30%;
}

div.spacer {
  width: 100%;
}
</style>