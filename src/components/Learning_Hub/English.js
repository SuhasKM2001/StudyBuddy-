import "../Learning_Hub/Maths.css";
function EnglishPage()
{
    return(
        <div className="english_main_file">
      <h1 className="maths_heading_styling">English</h1>

      <h3 className="maths_liveclass_heading_style">Upcoming Live Session</h3>

      <div className="maths_liveclass_style">
        <p className="maths_liveclass_text_style">Date: 22/02/2022</p>
        <p className="maths_liveclass_text_style">Time: 6 PM</p>
        <p className="maths_liveclass_text_style">Topic: Verb</p>
        <button className="maths_button_style">
                <a href="https://us05web.zoom.us/j/89641770571?pwd=WEVyMmc5VlV5Rm9oZi9XNnF5TjJ2Zz09
" target="_blank" className="maths_link_style">
                    <span className="session_style">Join the session</span>
                </a>
        </button>
      </div>

      <h2 className="maths_topic_heading_style">Resources</h2>
      <section className="maths_topic_style">
        <div className="maths_subtopic1_style">
          <a href="https://youtu.be/fxhMk3d9Gcg" target="_blank" className="maths_link_style1">
            <span className="resource_style">Tenses</span>
          </a>
        </div>

        <div className="maths_subtopic2_style">
          <a href="https://youtu.be/3BaOqOB5eX4" target="_blank" className="maths_link_style1">
            <span className="resource_style">Statements</span>
          </a>
        </div>

        <div className="maths_subtopic3_style">
          <a href="https://youtu.be/jUw_i96T1Z8" target="_blank" className="maths_link_style1">
            <span className="resource_style">Verbs</span>
          </a>
        </div>
      </section>

      <h2 className="maths_expertise_heading_style">Expertise</h2>
      <section className="maths_expertise_style">
        <div className="maths_subexpertise1_style">
          <div className="maths_subexpertise_contact_style">
            <img
              className="maths_avatar"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
            />
            <div>
              <p className="maths_contact_styling">Name: Peter</p>
              <p className="maths_contact_styling">Contact: 9876543210</p>
            </div>
          </div>
        </div>

        <div className="maths_subexpertise2_style">
          <div className="maths_subexpertise_contact_style">
            <img
              className="maths_avatar"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
            />
            <div>
              <p className="maths_contact_styling">Name: Tony</p>
              <p className="maths_contact_styling">Contact: 9786543210</p>
            </div>
          </div>
        </div>
        <div className="maths_subexpertise3_style">
          <div className="maths_subexpertise_contact_style">
            <img
              className="maths_avatar"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
            />
            <div>
              <p className="maths_contact_styling">Name: Steve</p>
              <p className="maths_contact_styling">Contact: 9678543210</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
}

export default EnglishPage;