const TableModel = require("./Models/RecipesModel");

const createRecipe = async (title, decription, rating)=>{
    let recipe = new TableModel;
    recipe.title = title;
    recipe.decription = decription;
    recipe.rating = rating;
    await recipe.save();
    console.log(recipe);

};


let UpdateRec = async (_id, title, decription, rating) => {
    let recipe = await TableModel.findById(_id);
    recipe.title= title;
    recipe.decription= decription;
    recipe.rating = rating;
    await recipe.save();
    console.log(recipe);
};


let deleteRec = async (_id) => {
    let recipe = await TableModel.findByIdAndDelete(_id);
    console.log(recipe);
}

let readRec = async ()=>{
    let recipes = await TableModel.find();
    console.log(recipes);
}

module.exports.createRecipe = createRecipe;
module.exports.UpdateRec = UpdateRec;
module.exports.deleteRec = deleteRec;
module.exports.readRec = readRec;