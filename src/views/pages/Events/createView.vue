<template>
  <SideBar></SideBar>
         <section id="multiple-column-form">
        <div class="row match-height">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Create Event</h4>
                    </div>
                    <div class="card-content">
                        <div class="card-body">
                            <form class="form">
                                <div class="row">
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <label for="first-name-column">Event Name</label>
                                            <input type="text" id="first-name-column" name="name" class="form-control"
                                               >
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <label for="last-name-column">Date</label>
                                            <input type="text" id="last-name-column" class="form-control"
                                               name="date">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <label for="city-column">From to Date</label>
                                            <input type="text" id="city-column" class="form-control" 
                                                name="from_to_date">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <label for="country-floating">Attendees Number</label>
                                            <input type="text" id="country-floating" class="form-control"
                                                name="attendees_number">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <label for="company-column">Select The Hall</label>
                                            <select  id="company-column" class="form-control"
                                                name="hall_name">
                                                <option>Choise the hall</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <label for="email-id-column">Description</label>
                                            <textarea id="email-id-column" class="form-control"
                                                name="description">
                                            </textarea>
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