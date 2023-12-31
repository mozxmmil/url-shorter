
import { Url } from "../model/url.js";
import { nanoid } from "nanoid";

const index = (req, res) => {
  return res.render("index");
};

const url = async (req,res)=>{
  const data = req.body.urlinput
 const recivedata = await Url.find({ data });
 console.log(recivedata);
  return res.render("url", { recivedata});
}
const urlgenrator = async (req, res) => {
  const body = req.body.urlinput;
  console.log(body);
  if (!body) return res.status(200).json({ id: "url is required" });
  const shortid = nanoid(8);
  const recivedata = await Url.create({
    shortid: shortid,
    directurl: body,
    visithistory: [],
  });
  return res.redirect("url")
};
const urldirector = async (req, res) => {
  const data = req.params.shortid;
  const recivedata = await Url.findOneAndUpdate(
    { shortid: data },
    {
      $push: {
        visithistory: {
          timestamps: Date.now(),
        },
      },
    }
  );
 
  // return res.redirect(recivedata[0].directurl);
  return res.redirect(recivedata.directurl);
};

export { urlgenrator, urldirector, index ,url};
