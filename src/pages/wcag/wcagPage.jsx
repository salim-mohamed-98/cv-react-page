import Header from "components/Header";
import React from "react";

export default function WcagPage() {
  return (
    <>
      <Header
        title="WCAG A+AA Overview"
        text="This page provides a concise breakdown of WCAG A+AA guidelines. Learn
          how my site adheres to these standards for developers,ensuring an
          inclusive web experience."
        html_emoji="♿"
      />
      <section>
        <ol>
          <li>
            <article>
              <h2>WCAG 1.3.1 (A)</h2>
              <strong>
                Convey information, structure and relationships in the code
              </strong>
              <p>
                Implementation is basically using correct html-semantic so that
                the machine is able to understand the meaning of contents.
              </p>
              <p>
                I fullfilled this guideline by using correct html tags for each
                content in webb pages. examples html tags i have used includes{" "}
                <code>
                  nav, header, article, dd, dl, dt, section, footer, ul, li, ol,
                  p, small, strong, b, img
                </code>{" "}
                and so on.
              </p>
            </article>
          </li>
          <li>
            <article>
              <h2>WCAG 1.3.5 (AA)</h2>
              <strong>Specify the purpose of form fields in the code</strong>
              <p>
                This guideline is relevant for individuals who utilize form
                input fields. However, as there are no forms present on my
                website, this particular guideline cannot be adhered to.
              </p>
            </article>
          </li>
          <li>
            <article>
              <h2>WCAG 2.1.1 (A)</h2>
              <strong>All functionality must be usable with a keyboard</strong>
              <p>
                I've accomplished this by employing appropriate functional HTML
                elements, such as buttons and anchor (a) tags. Through
                meticulous testing, my website ensures comprehensive keyboard
                accessibility, allowing users to navigate and access all
                features effortlessly.
              </p>
            </article>
          </li>
          <li>
            <article>
              <h2>WCAG 2.4.1 (A)</h2>
              <strong>Makes it possible to skip recurring content</strong>
              <p>
                I achieve WCAG 2.4.1 compliance by adding a prominent link at
                the top of each page, directly leading users to the main content
                area. This ensures swift access, benefiting users who rely on
                screen readers or keyboard navigation.
              </p>
            </article>
          </li>
          <li>
            <article>
              <h2>WCAG 2.5.3 (A)</h2>
              <strong>
                Ensure text on buttons and controls match machine-readable names
              </strong>
              <p>
                This guideline holds significant importance. In order to adhere
                to it, I ensured that each interactive element possesses a
                corresponding machine-readable name. In cases where multiple
                interactive elements perform the same function, I consistently
                assigned them the same machine-readable name. Likewise, I
                maintained this coherence by utilizing the ARIA HTML attribute,
                specifically <code>aria-label</code>.
              </p>
            </article>
          </li>
          <li>
            <article>
              <h2>WCAG 3.1.1 (A)</h2>
              <strong>Specify the language of the page in the code</strong>
              <p>
                I have achieved this compliance by straightforwardly specifying
                the main language in HTML pages. This is accomplished by
                utilizing the 'lang' attribute on the root element of the page.
                For example, in the case of English, the code is as follows:
                <code>&lt;html lang="en"&gt;</code>. This ensures that the
                language of the content is accurately conveyed, promoting
                accessibility for all users.
              </p>
            </article>
          </li>
          <li>
            <article>
              <h2>WCAG 3.1.2 (AA)</h2>
              <strong>Specify language changes in the code</strong>
              <p>
                I dont have any possible language changes in all my content in
                this website therefore this guideline is not needed to possible
                to adhere.
              </p>
            </article>
          </li>
          <li>
            <article>
              <h2>WCAG 3.2.1 (A)</h2>
              <strong>No context change on focus</strong>
              <p>
                I achieve this compliance by maintaining a seamless user
                experience with no context changes on focus. Through careful
                design and coding practices, the focus changes on my website are
                implemented in a way that ensures users are not disoriented,
                providing a consistent and accessible browsing experience.
              </p>
            </article>
          </li>
          <li>
            <article>
              <h2>WCAG 3.3.1 (A)</h2>
              <strong>
                Show where an error occurred and describe it clearly
              </strong>
              <p>
                In the context of my website, which does not include forms for
                users to fill out. As there are no interactive forms present,
                the guideline is outside the scope of the website's
                functionality, and therefore, adherence to this particular
                guideline is not feasible.
              </p>
            </article>
          </li>
          <li>
            <article>
              <h2>WCAG 3.3.2 (A)</h2>
              <strong>Create clear field labels and callouts</strong>
              <p>
                In the context of my website, which does not include forms for
                users to fill out. As there are no interactive forms present,
                the guideline is outside the scope of the website's
                functionality, and therefore, adherence to this particular
                guideline is not feasible.
              </p>
            </article>
          </li>
          <li>
            <article>
              <h2>WCAG 3.3.3 (AA)</h2>
              <strong>Give suggestions on how errors can be corrected</strong>
              <p>
                In the context of my website, which does not include forms for
                users to fill out. As there are no interactive forms present,
                the guideline is outside the scope of the website's
                functionality, and therefore, adherence to this particular
                guideline is not feasible.
              </p>
            </article>
          </li>
          <li>
            <article>
              <h2>WCAG 4.1.1 (A)</h2>
              <strong>Make sure the code validates</strong>
              <p>In WCAG 2.2, criterion 4.1.1 has been removed.</p>
            </article>
          </li>
          <li>
            <article>
              <h2>WCAG 4.1.2 (A)</h2>
              <strong>Make sure components work in aids</strong>
              <p>
                My website complies with this guideline by utilizing standard
                HTML components and incorporating ARIA attributes for
                custom-developed elements. .
              </p>
            </article>
          </li>
          <li>
            <article>
              <h2>WCAG 4.1.3 (A)</h2>
              <strong>
                Ensure that assistive devices can present messages that are not
                in focus
              </strong>
              <p>
                As my website doesn't involve activities like chat
                participation, form filling, or queuing, WCAG 4.1.3 (A) isn't
                directly applicable to its current functionalities.
                Consequently, the implementation of this guideline is not
                relevant to the specific context of my website.
              </p>
            </article>
          </li>
        </ol>
      </section>
    </>
  );
}
