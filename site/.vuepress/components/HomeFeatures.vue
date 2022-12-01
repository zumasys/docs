<template>
  <div class="features">
    <p></p>
    <div class="spacer"><br /></div>
    <div class="spacer">
      <ProductLogos />
    </div>
    <div class="spacer"><br /></div>
    <div class="feature spacer">
      <h2>Zumasys</h2>
      <p>
        <a href="/rover/rover-bi-overview">Rover BI: Overview</a><br />
        <a href="/rover/rover-hub-overview">Rover Hub: Overview</a><br />
        <a href="/rover/customer-portal">Rover Hub: Customer Portal</a><br />
        <a href="/rover/rover-gateway-overview">Rover Gateway: Overview</a></br>
        <a href="/rover/">All Rover Docs</a>
      </p>
    </div>
    <div class="feature spacer">
      <h2>&nbsp;</h2>
      <p>
        <a href="/totalink/">Rover Pay</a><i> (formerly TotaLink)</i><br />
        <a href="/smartsuite/pos/">Rover POS</a><i> (formerly Smart Suite)</i><br />
        <a href="/rover/rover-marketplace-overview">Rover Marketplace: Overview</a></br>
        <a href="/rover/rover-scan-overview">Rover Scan: Overview</a></br>
        <a href="https://training.total-computing.com/" target="_blank">All Smart Suite Docs</a>
      </p>
    </div>
    <div class="feature spacer">
      <h2>Rocket Software</h2>
      <p>
        <a
          href="https://docs.rocketsoftware.com/bundle?name_filter.field=title&name_filter.value=jbase&rpp=10&sort.field=last_uploaded&sort.value=desc"
          target="_blank"
          >jBASE</a
        ><br />
        <a
          href="https://docs.rocketsoftware.com/bundle/uan1648152295574/page/iuu1648656273005.html"
          target="_blank"
          >OpenQM</a
        ><br />
        <a
          href="https://docs.rocketsoftware.com/bundle?name_filter.field=title&name_filter.value=AccuTerm&rpp=10&sort.field=last_uploaded&sort.value=desc"
          target="_blank"
          >AccuTerm</a
        ><br />
        <a
          href="https://docs.rocketsoftware.com/bundle/pdy1647626978888/page/jlw1647626979784.html"
          target="_blank"
          >MV Connect</a
        ><br />
        <a
          href="https://docs.rocketsoftware.com/bundle/kzn1647627508192/page/uet1647627509997.html"
          target="_blank"
          >MV Dashboard</a
        >
      </p>
    </div>
    <div class="spacer"><br /></div>
    <div class="spacer">
      <p>For help with <b>Zumasys</b> products, please email <a href="mailto:help@zumasys.com">help@zumasys.com</a> or call <a href="tel:866-986-2797">866-ZUMASYS (866-986-2797)</a>.</p>
      <p>For help with <b>Rocket</b> products, please email <a href="mailto:zs-support@rocketsoftware.com">zs-support@rocketsoftware.com</a>.</p>
    </div>
  </div>
</template>

<script>
import ProductLogos from "@theme/components/ProductLogos.vue";
export default {
  components: { ProductLogos },
  name: "Features",
};
</script>

<style scoped>
div.spacer {
  width: 100%;
  text-align: center;
}
</style>