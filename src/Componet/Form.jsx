const Form = () => {
  return (
    <div className="recipe-form">
      <div class="form-grid">
        <div class="form-content">
          <section class="section">
            <h2>Recipe Information</h2>

            <label>Recipe Name</label>
            <input type="text" placeholder="e.g. Doro Wat" required />

            <div class="two">
              <div>
                <label>Category</label>
                <select required>
                  <option value="">Select category</option>
                  <option>Ethiopian</option>
                  <option>Breakfast</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                  <option>Dessert</option>
                </select>
              </div>

              <div>
                <label>Difficulty</label>
                <select>
                  <option value="">Select difficulty</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
            </div>

            <div class="two">
              <div>
                <label>Preparation Time</label>
                <input type="text" placeholder="e.g. 30 min" />
              </div>
              <div>
                <label>Servings</label>
                <input type="number" min="1" placeholder="e.g. 4" />
              </div>
            </div>
          </section>

          <section class="section">
            <h2>Ingredients</h2>
            <p class="help">List your ingredients, one per line.</p>
            <label>Ingredients</label>
            <textarea
              rows="8"
              placeholder="1 whole chicken&#10;2 large onions&#10;4 cloves garlic&#10;2 tbsp berbere spice&#10;1/4 cup niter kibbeh"
            ></textarea>
          </section>

          <section class="section">
            <h2>Preparation Steps</h2>
            <p class="help">Describe the preparation steps.</p>
            <label>Steps</label>
            <textarea
              rows="8"
              placeholder="1. Prepare the ingredients.&#10;2. Cook the onions until golden.&#10;3. Add the spices and chicken.&#10;4. Simmer until tender."
            ></textarea>
          </section>
        </div>

        <aside class="side">
          <section class="upload-card">
            <h2>Recipe Image</h2>

            <label class="upload-box" for="recipe-image">
              <div class="upload-icon">⇧</div>
              <strong>Upload Image</strong>
              <span>JPG, PNG up to 5MB</span>
              <input
                id="recipe-image"
                type="file"
                accept="image/png,image/jpeg"
              />
            </label>

            <div id="preview"></div>
          </section>

          <section class="tips">
            <h2>Recipe Tips</h2>
            <ul>
              <li>Use clear and simple instructions.</li>
              <li>Add accurate preparation times.</li>
              <li>Use a high-quality food photo.</li>
              <li>List ingredients in the order they are used.</li>
            </ul>
          </section>
        </aside>
      </div>

      <div class="actions">
        <button type="reset" class="cancel">
          Cancel
        </button>
        <button type="submit" class="publish">
          Publish Recipe ➤
        </button>
      </div>
    </div>
  );
};

export default Form;
