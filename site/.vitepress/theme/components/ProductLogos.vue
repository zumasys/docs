<template>
  <div class="product-logos">
    <div class="row">
      <div class="column">
        <a href="/rover/business-suite/pay/">
          <img src="/assets/img/rover-pay.png" alt="Rover Pay" />
        </a>
      </div>
      <div class="column">
        <a href="/rover/business-suite/pos/">
          <img src="/assets/img/rover-pos.png" alt="Rover POS" />
        </a>
      </div>
      <div class="column">
        <a href="https://www.zumasys.com/rover-scan/" target="_blank">
          <img src="/assets/img/rover-scan.png" alt="Rover Scan" />
        </a>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <a href="https://www.zumasys.com/rover-bi/" target="_blank">
          <img src="/assets/img/rover-bi.png" alt="Rover BI" />
        </a>
      </div>
      <div class="column">
        <a href="https://www.zumasys.com/rover-ai/" target="_blank">
          <img src="/assets/img/rover-ai.png" alt="Rover AI" />
        </a>
      </div>
      <div class="column">
        <a href="https://www.zumasys.com/rover-sales/" target="_blank">
          <img src="/assets/img/rover-sales.png" alt="Rover Sales" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-logos {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (max-width: 799px) {
  .product-logos {
    display: none;
  }
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}

.column {
  flex-basis: 100%;
}

.column a {
  display: block;
}

.column img {
  width: 100%;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.column img:hover {
  transform: scale(1.02);
}

@media screen and (min-width: 800px) {
  .column {
    flex: 1;
  }
}
</style>
