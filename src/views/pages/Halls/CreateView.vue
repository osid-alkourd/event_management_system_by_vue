<template>
  <SideBar></SideBar>
         <section id="multiple-column-form">
        <div class="row match-height">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Create Hall</h4>
                    </div>
                    <div class="card-content">
                        <div class="card-body">
                            <form class="form">
                                <div class="row">
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <label for="first-name-column">Hall Name</label>
                                            <input type="text" id="first-name-column" class="form-control"
                                                name="name">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <label for="last-name-column">Building Name</label>
                                            <input type="text" id="last-name-column" class="form-control"
                                                name="building_name">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <label for="city-column">absorptive capacity</label>
                                            <input type="text" id="city-column" class="form-control"
                                                name="absorptive_capacity">
                                        </div>
                                    </div>
                                    
                                           
                                    <div class="col-12 d-flex justify-content-end">
                                        <button type="submit" class="btn btn-primary me-1 mb-1">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
  <Footer></Footer>
</template>

<script>
     import SideBar from "../../../components/SideBar.vue";
     import Footer from "../../../components/Footer.vue";

export default {
  components: {SideBar , Footer}
}
</script>

<style>

</style>