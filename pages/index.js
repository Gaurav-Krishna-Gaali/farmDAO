import styles from "../styles/Home.module.css";
import Login from "../components/Login";
import { useContext, useEffect, useState } from "react";
import { FarmDAOContext } from "../context/context";
import Header from "../components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
const Home = () => {
  const [proposals, setProposals] = useState(null);
  const [proposalInput, setProposalInput] = useState("");
  const { currentUserAddress } = useContext(FarmDAOContext);
  return (
    <div className={styles.container}>
      {!currentUserAddress ? (
        <>
          <Header />
          <ToastContainer />
          <div className={styles.content}>
            <div className={styles.createProposalForm}>
              <div className={styles.formTitle}>Make a Proposal</div>
              <input
                className={styles.formInput}
                placeholder="Make a Proposal"
                value={proposalInput}
                onChange={(e) => {
                  setProposalInput(e.target.value);
                }}
              />
              <button
                className={styles.formButton}
                disabled={!proposalInput}
                onClick={() => {
                  createProposal(proposalInput);
                  setProposalInput("");
                  toast.info("⏳ Submitting Proposal ⏳", {
                    position: "top-center",
                    autoClose: 8000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
                }}
              >
                Submit
              </button>
            </div>

            <div className={styles.proposals}>
              {proposals &&
                proposals.map((proposal) => {
                  return (
                    <ProposalCard key={Math.random()} proposal={proposal} />
                  );
                })}
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};
export default Home;
