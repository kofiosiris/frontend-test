import React from "react";
import "./authFooter.css";

function AuthFooter() {
  return (
    <div className="sticky__footer">
      <footer class="bg-light text-center text-lg-start mt-auto">
        <div class="container p-4">
          <div class="row">
            {/* <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">Footer text</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>

            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">Footer text</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div> */}
          </div>
        </div>

        <div
          class="text-left p-3 gap-1"
          style={{
            backgroundColor: "white",
            borderTop: "1px solid #ccc",
            fontSize: "14px",
            display: "flex",
          }}
        >
          © 2020 Copyright :
          <a class="text-dark" href="https://mdbootstrap.com/">
            SpeediGo.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default AuthFooter;
