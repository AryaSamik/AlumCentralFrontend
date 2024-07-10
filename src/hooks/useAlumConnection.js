import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from "../context/AuthContext";
import { addConversation } from "../features/conversationSlice";
import GetConversations from "./useGetConversations";
import useConversation from "../zustand/useConversation";

const useAlumConnection = (person) => {
    const {  authUser } = useAuthContext();
    const navigate = useNavigate();
    const { setSelectedConversation } = useConversation();
    const dispatch = useDispatch();
    const { loading, conversations } = useSelector(state => state.conversations);

    useEffect(() => {
        if (!person) return;

        if (!authUser) {
            navigate('/AlumniLogin');
            return;
        }

        if (!loading && conversations.length === 0) {
            dispatch(GetConversations());
        }
    }, [authUser, dispatch, loading, conversations, navigate, person]);

    useEffect(() => {
        if (!person) return;

        if (authUser && conversations.length > 0) {
            const existingConversation = conversations.find(conv => conv._id === person._id);
            if (!existingConversation) {
                dispatch(addConversation(person));
            }
            setSelectedConversation(person);

            navigate('/messages');
        }
    }, [authUser, conversations, person, setSelectedConversation, dispatch, navigate]);
};

export default useAlumConnection;
