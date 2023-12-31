import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { submitForm /* getMyDailyForm */ } from "../redux/actions/form";

const AttestationForm = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const [working, setWorking] = useState("yes");
  const [traveled, setTraveled] = useState("yes");
  const [symptoms, setSymptoms] = useState("yes");
  const [contact, setContact] = useState("yes");
  const [exposure, setExposure] = useState("yes");
  const [test, setTest] = useState("yes");

  const formDetails = useSelector((state) => state.formSubmit);
  const { loading, error, formSuccess } = formDetails;

  // const formDailyMy = useSelector((state) => state.formDailyMy);
  // const { dailyForm } = formDailyMy;

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  useEffect(() => {
    // dispatch(getMyDailyForm());
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      submitForm({
        email: userInfo.email,
        working,
        traveled,
        symptoms,
        contact,
        exposure,
        test,
      })
    );
  };

  return (
    <>
      <Link to='/profile' className='btn btn-light my-3'>
        Go Back
      </Link>
      {formSuccess ? (
        <>
          <Message variant='info'>Form filled for today, Thanks</Message>
        </>
      ) : (
        <FormContainer>
          <h1>Attestation Form {date}</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='name'
                  value={userInfo.name}
                  disabled
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='working'>
                <Form.Label>
                  Will you be working your scheduled shift today?
                </Form.Label>
                <Form.Control
                  as='select'
                  value={working}
                  onChange={(e) => setWorking(e.target.value)}
                >
                  <option>yes</option>
                  <option>no</option>
                </Form.Control>
              </Form.Group>

              <p>
                <b>
                  If your answer is YES to any of the following questions, you
                  may not enter Formsite's workplace.
                </b>
              </p>
              <p>
                Note: The questionnaire only relates to new symptoms or a
                worsening of symptoms related to chronic or pre-existing
                conditions.
              </p>

              <Form.Group controlId='traveled'>
                <Form.Label>
                  Have you traveled outside of Canada in the past 14 days?
                </Form.Label>
                <Form.Control
                  value={traveled}
                  as='select'
                  onChange={(e) => setTraveled(e.target.value)}
                >
                  <option>yes</option>
                  <option>no</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId='symptoms'>
                <Form.Label>
                  Are you experiencing any of the following symptoms that are
                  new or worsened? - Fever
                </Form.Label>
                <Form.Control
                  as='select'
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                >
                  <option>yes</option>
                  <option>no</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId='contact'>
                <Form.Label>
                  In the past 14 days, at work or elsewhere, while not wearing a
                  mask and eye protection, did you have close contact with:
                </Form.Label>
                <Form.Control
                  as='select'
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                >
                  <option>yes</option>
                  <option>no</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId='exposure'>
                <Form.Label>
                  Have you had a laboratory exposure to biological material
                  (e.g., patient specimens) known to contain COVID-19?
                </Form.Label>
                <Form.Control
                  as='select'
                  value={exposure}
                  onChange={(e) => setExposure(e.target.value)}
                >
                  <option>yes</option>
                  <option>no</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId='test'>
                <Form.Label>
                  Have you had a positive COVID-19 test in the past 14 days?
                </Form.Label>
                <Form.Control
                  as='select'
                  value={test}
                  onChange={(e) => setTest(e.target.value)}
                >
                  <option>yes</option>
                  <option>no</option>
                </Form.Control>
              </Form.Group>

              <Button type='submit' variant='primary'>
                Submit
              </Button>
            </Form>
          )}
        </FormContainer>
      )}
    </>
  );
};

export default AttestationForm;
