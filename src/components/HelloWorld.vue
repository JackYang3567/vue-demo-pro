<template>
  <div >
   
    <div class="preloader">
        <div class="spinner"></div>
    </div>
   


    <div class="features segments">
      
        <div class="container">
            <h1>{{ msg }}</h1>
            <div class="row">
                <div class="col s6">
                    <div class="content">
                        <i class="fas fa-desktop"></i>
                        <h6>Clean</h6>
                    </div>
                </div>
                <div class="col s6">
                    <div class="content">
                        <i class="fas fa-chart-area"></i>
                        <h6>Marketing</h6>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s6">
                    <div class="content">
                        <i class="fas fa-star"></i>
                        <h6>Update</h6>
                    </div>
                </div>
                <div class="col s6">
                    <div class="content">
                        <i class="fas fa-phone"></i>
                        <h6>Support</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="best-properties segments bg-second">
        <div class="container">
            <div class="section-title">
                <h3>BEST PROPERTIES</h3>
            </div>
            <div class="row">
                <div class="col s6">
                    <div class="content">
                        <div class="image">
                            <img src="images/property1.jpg" alt="">
                            <div class="info-price">
                                <span>$128.00</span>
                            </div>
                        </div>
                        <div class="text">
                            <a href="properties-details.html"><h5>Traditional Home</h5></a>
                            <span>FOR RENT</span>
                            <p><i class="fas fa-map-marker-alt"></i>Ipsum Street, 430</p>
                        </div>
                    </div>
                </div>
                <div class="col s6">
                    <div class="content">
                        <div class="image">
                            <img src="images/property2.jpg" alt="">
                            <div class="info-price">
                                <span>$213.00</span>
                            </div>
                        </div>
                        <div class="text">
                            <a href="properties-details.html"><h5>Luxury Home</h5></a>
                            <span>FOR SALE</span>
                            <p><i class="fas fa-map-marker-alt"></i>Ipsum Street, 430</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s6">
                    <div class="content">
                        <div class="image">
                            <img src="images/property3.jpg" alt="">
                            <div class="info-price">
                                <span>$128.00</span>
                            </div>
                        </div>
                        <div class="text">
                            <a href="properties-details.html"><h5>Natural Home</h5></a>
                            <span>FOR RENT</span>
                            <p><i class="fas fa-map-marker-alt"></i>Ipsum Street, 430</p>
                        </div>
                    </div>
                </div>
                <div class="col s6">
                    <div class="content">
                        <div class="image">
                            <img src="images/property4.jpg" alt="">
                            <div class="info-price">
                                <span>$213.00</span>
                            </div>
                        </div>
                        <div class="text">
                            <a href="properties-details.html"><h5>Modern Home</h5></a>
                            <span>FOR SALE</span>
                            <p><i class="fas fa-map-marker-alt"></i>Ipsum Street, 430</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="latest-news segments">
        <div class="container">
            <div class="section-title">
                <h3>LATEST NEWS</h3>
            </div>
            <div class="row">
                <div class="col s6">
                    <div class="content">
                        <img src="images/latest-news1.jpg" alt="">
                        <div class="text">
                            <a href="blog-single.html"><h5>New Residence</h5></a>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
                <div class="col s6">
                    <div class="content">
                        <img src="images/latest-news2.jpg" alt="">
                        <div class="text">
                            <a href="blog-single.html"><h5>Unique Design</h5></a>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
