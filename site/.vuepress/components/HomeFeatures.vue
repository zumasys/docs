<template>
  <div class="features">
    <p></p>
    <div class="spacer"><br /></div>
    <div>
      <ProductLogos />
    </div>
    <Assistant />
    <div class="spacer"><br /></div>
    <div class="feature spacer">
      <h2>Zumasys</h2>
      <p>
        <a href="/rover/business-suite/">Rover Business Suite</a><br />
        <a href="/rover/business-suite/pos/">Rover POS</a><br />
        <a href="/rover/business-suite/pay/">Rover Pay</a><br />
        <a href="/rover/business-suite/bi/">Rover BI</a><br />
        <a href="/rover/business-suite/portal/">Rover Portal</a>
      </p>
    </div>
    <div class="feature spacer">
      <h2>&nbsp;</h2>
      <p>
        <a href="/rover/business-suite/gateway/">Rover Gateway</a></br>
        <a href="/rover/business-suite/scan/">Rover Scan</a></br>
        <a href="/rover/business-suite/field-services/">Rover Field Services</a></br>
        <a href="/rover/release-notes/">Rover Release Notes</a><br />
        <a href="/rover/">All Rover ERP Docs</a><br />
        <a href="/smartsuite/">All Smart Suite Docs</a>
      </p>
    </div>
    <div class="feature spacer">
      <h2>Product Demos</h2>
      <p>
        <a href="https://zumasys.navattic.com/tx30b9v" target="_blank">Rover POS (Order Creation)</a><br />
        <a href="https://zumasys.navattic.com/vn907jr" target="_blank">Rover Tickets & Time (Ticket Creation)</a>
      </p>
    </div>
    <div class="spacer"><br /></div>
    <div class="spacer">
      <p>For help with <b>Zumasys</b> products, please email <a href="mailto:help@zumasys.com">help@zumasys.com</a> or
        call <a href="tel:866-986-2797">866-ZUMASYS (866-986-2797)</a>.</p>
    </div>
  </div>
</template>

<script>
import ProductLogos from "@theme/components/ProductLogos.vue";
import Assistant from "./Assistant.vue";
export default {
  components: { ProductLogos, Assistant },
  name: "Features",
};
</script>

<style scoped>
div.spacer {
  width: 100%;
  text-align: center;
}
</style>
