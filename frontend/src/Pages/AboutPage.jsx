import React from "react";
import MainLayout from "../Layout/MainLayout";
import "./AboutPage.css";
import mark from "../assets/mark.jpg";

function AboutPage() {
  return (
    <MainLayout>
      <div className="about">
        <span className="hService">HEALTH SERVICE DEPARTMENT-DASMARIÑAS</span>
        <div className="director">
          <img src={mark} alt="" className="staff-pic" />
          <div className="staff-label">
            <p>DIRECTOR, HEALTH SERVICES</p>
            <span className="staff-name">WESLEY C. VINLUAN, MD</span>
          </div>
        </div>

        <div className="coordinator">
          <img src={mark} alt="" className="staff-pic" />
          <div className="staff-label">
            <p>COORDINATOR, HEALTH SERVICES</p>
            <span className="staff-name">ARCHEL ANTONIO, RN</span>
          </div>
        </div>

        <div className="mdLabel">
          <div className="medical">
            <p>MEDICAL</p>
          </div>

          <div className="dental">
            <p>DENTAL</p>
          </div>
        </div>

        <div className="third">
          <div className="med">
            <img src={mark} alt="" className="med-pic" />
            <div className="m1"></div>
            <div className="med-label">
              ROBERT JOSEPH G. RUBIO, MD, MBA, DPCON
            </div>
          </div>

          <div className="med">
            <img src={mark} alt="" className="med-pic" />
            <div className="m2"></div>
            <div className="med-label2">NEILL ELVIN D. HAYAG, MD</div>
          </div>
          <div className="med">
            <img src={mark} alt="" className="med-pic" />
            <div className="m3"></div>
            <div className="med-label">JOMARIEZEN TALAG-AMAR, DMD</div>
          </div>
          <div className="med">
            <img src={mark} alt="" className="med-pic" />
            <div className="m4"></div>
            <div className="med-label">RONALD C. HERRERA, DMD, MPM</div>
          </div>
        </div>

        <div className="mdLabel">
          <div className="nursing">
            <p>NURSING</p>
          </div>
        </div>

        <div className="nursingL"></div>

        <div className="third">
          <div className="med">
            <img src={mark} alt="" className="med-pic" />
            <div className="n1"></div>
            <div className="n-label">
              JOLI ANNE R. RIOFLORIDO, RN
              <br />
              SHS NURSE
            </div>
          </div>

          <div className="med">
            <img src={mark} alt="" className="med-pic" />
            <div className="n-label">
              <div className="n2"></div>
              SHERYL ABIGAIL R. GARGAR,RN
              <br />
              ELEMENTARY NURSE
            </div>
          </div>
          <div className="med">
            <img src={mark} alt="" className="med-pic" />
            <div className="n3"></div>
            <div className="n-label">
              ERIKA CAMILLE M. CALMA, RN
              <br />
              JHS NURSE
            </div>
          </div>
          <div className="med">
            <img src={mark} alt="" className="med-pic" />
            <div className="n4"></div>
            <div className="n-label">
              ARIANNE MAE C. ANTONIO, RN
              <br />
              COLLEGE NURSE
            </div>
          </div>
        </div>

        <div className="fifth">
          <div className="med">
            <img src={mark} alt="" className="med-pic" />
            <div className="n5"></div>
            <div className="n-label">
              RONALDO P. DESAGON, RN
              <br />
              SHS NURSE
            </div>
          </div>
          <div className="med">
            <img src={mark} alt="" className="med-pic" />
            <div className="n6"></div>
            <div className="n-label">
              GUENDELYN P. CUENO, RN
              <br />
              COLLEGE NURSE
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default AboutPage;
