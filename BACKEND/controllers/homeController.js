const navigation = require("../data/homepage/navigation.json");
const shortcutCategories = require("../data/homepage/shortcutCategories.json");
const hero = require("../data/homepage/hero.json");
const products = require("../data/homepage/products.json");
const membership = require("../data/homepage/membership.json");
const concerns = require("../data/shopByConcern/concerns.json");
const videos = require("../data/homepage/videos.json");
const youtube = require("../data/homepage/youtube.json");
const proofs = require("../data/homepage/proofs.json");
const brands = require("../data/homepage/brands.json");
const footer = require("../data/homepage/footer.json");
const spotlight = require("../data/homepage/spotlight.json");
const foundersHero =
  require("../data/founders/hero.json");
const foundersStory =
  require("../data/founders/story.json");
const storyContent =
  require("../data/founders/storyContent.json");
const wayForward =
  require("../data/founders/wayForward.json");
const visionaries =
  require("../data/founders/visionaries.json");
const awardsHero =
  require("../data/awards/hero.json");
const mediaMentions =
  require("../data/awards/mediaMentions.json");
const youtubeVideos =
require("../data/awards/youtubeVideos.json");
const teamHero =
require("../data/teamOnGround/hero.json");
const teamIntro =
require("../data/teamOnGround/intro.json");
const teamMembers =
require("../data/teamOnGround/members.json");
const trackOrder =
require("../data/trackOrder/trackOrder.json");
const contact =
require("../data/contact/contact.json");
const refundPolicy =
require("../data/policies/refundPolicy.json");
const shippingPolicy =
require("../data/policies/shippingPolicy.json");
const categories =
require("../data/homepage/categories.json");
const farmLife =
require("../data/founders/farmLife.json");
const customers =
require("../data/homepage/customers.json");

const getHomepage = (req, res) => {
  console.log(concerns);
  res.status(200).json({
    navigation,
    shortcutCategories,
    hero,
    products,
    membership,
    concerns,
    videos,
    youtube,
    proofs,
    brands,
    footer,
    spotlight,
    foundersHero,
    foundersStory,
    storyContent,
    wayForward,
    visionaries,
    awardsHero,
    youtubeVideos,
    mediaMentions,
    teamHero,
    teamIntro,
    teamMembers,
    trackOrder,
    contact,
    refundPolicy,
    shippingPolicy,
    farmLife,
    customers,
    categories,
  });
};

module.exports = {
  getHomepage,
};