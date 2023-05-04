import Slider from "./slider/Slider";
import ChefCard from "../Shared/ChefCard/ChefCard";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <ChefCard></ChefCard>
      <h2 className="text-4xl font-bold text-center text-rose-700 mt-12">
        Freequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-11/12 mx-auto py-12">
        <div>
          <img
            src="https://st2.depositphotos.com/2704315/7555/v/950/depositphotos_75558725-stock-illustration-business-man-with-question-mark.jpg"
            alt=""
          />
        </div>
        <div>
          <p>
            <span className="font-bold tracking-wider"> Common Answer :</span>{" "}
            Some popular Chinese dishes include Kung Pao chicken, which is a
            spicy stir-fry dish made with chicken, peanuts, vegetables, and
            chili peppers; dumplings (jiaozi), which are small pockets of dough
            filled with meat or vegetables and usually served with a dipping
            sauce; ma po tofu, which is a spicy Sichuan dish made with soft
            tofu, ground pork, and chili oil; fried rice,{" "}
          </p>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-10">
            <div className="collapse-title text-xl font-medium">
              What are some common ingredients used in Chinese cooking?
            </div>
            <div className="collapse-content">
              <p>
                Common ingredients used in Chinese cooking include soy sauce,
                rice vinegar, ginger, garlic, scallions, sesame oil, Sichuan
                peppercorns, dried chili peppers, and many types of vegetables,
                meats, and seafood.
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
              How is Chinese cuisine different from Chinese-American cuisine?
            </div>
            <div className="collapse-content">
              <p>
                Chinese-American cuisine is often adapted to suit the American
                palate and includes dishes that may not be commonly found in
                China, such as General Tso's chicken and chop suey.
                Additionally, Chinese-American cuisine may use different cooking
                techniques and ingredients than traditional Chinese cuisine.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
              What is the difference between Cantonese and Sichuan cuisine?
            </div>
            <div className="collapse-content">
              <p>
                Cantonese cuisine tends to be lighter and focuses on using fresh
                ingredients and delicate flavors, while Sichuan cuisine is known
                for its bold and spicy flavors.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pb-8 pt-1 bg-rose-100">
        <h2 className="text-4xl font-bold text-center text-rose-700 mt-12">
          Testimonials
        </h2>
        <div className="">
          <div className="carousel w-full ">
            <div id="item1" className="carousel-item w-full">
              <div className="mx-auto ">
                <div className="flex justify-center my-8">
                  {" "}
                  <img
                    src="https://freepngimg.com/thumb/man/22654-6-man.png"
                    className="w-28 h-28 rounded-full "
                  />
                </div>
                <p className="max-w-md text-center mt-8">
                  "The Kung Pao chicken was amazing! The combination of the
                  tender chicken, roasted peanuts, and spicy peppers was just
                  perfect. The combination of the tender chicken, roasted
                  peanuts, and spicy peppers was just perfect"
                </p>
                <p className="font-bold text-rose-500 text-center">
                  Amit sahanim
                </p>
              </div>
            </div>
            <div id="item2" className="carousel-item w-full">
              <div className="mx-auto ">
                <div className="flex justify-center my-8">
                  {" "}
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/03/02/88/46/1000_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg"
                    className="w-28 h-28 rounded-full "
                  />
                </div>
                <p className="max-w-md text-center mt-8">
                  The fried rice was a great side dish that went well with the
                  rest of our meal. The veggies were cooked perfectly and the
                  soy sauce really brought it all together." "The hot and sour
                  soup had just the right balance of flavors. The vinegar and
                  soy sauce gave it a
                </p>
                <p className="font-bold text-rose-500 text-center">John sina</p>
              </div>
            </div>
            <div id="item3" className="carousel-item w-full">
              <div className="mx-auto ">
                <div className="flex justify-center my-8 ">
                  {" "}
                  <img
                    src="https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                    className="w-28 h-28 rounded-full "
                  />
                </div>
                <p className="max-w-md text-center mt-8">
                  The dumplings were so delicious and satisfying. The pork
                  filling was seasoned just right, and the dipping sauce really
                  enhanced the flavor." "Ma Po tofu is now one of my favorite
                  Chinese dishes. The soft tofu in the spicy sauce was a great
                  contrast, and the ground pork added a nice savory flavor."
                </p>
                <p className="font-bold text-rose-500 text-center">
                  Bubul bulaye
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
