import React, { useEffect, useState } from "react";
import { ITicket, IFilter } from "../../types/types";
import Filter from "../../components/Filter/Filter";
import Ticket from "../../components/Ticket/Ticket";
import List from "../../components/List";
import cl from "./TicketPage.module.scss";
import Tabs from "../../components/Tabs/Tabs";
import { useTickets } from "../../hooks/useTickets";
import MyButton from "../../components/UI/button/MyButton";
import Loader from "../../components/UI/Loader/Loader";
import { useFetching } from "../../hooks/useFetching";
import TicketService from "../../API/TicketService";
import { animateScroll as scroll } from "react-scroll";
import MyScroll from "../../components/UI/Scroll/MyScroll";

const TicketPage = () => {
    const [tickets, setTickets] = useState<ITicket[]>([]);
    const [filter, setFilter] = useState<IFilter>({ chx: [], sort: "" });
    const [ticketsLimit, setTicketsLimit] = useState<number>(5);
    const [showScrollBtn, setShowScrollBtn] = useState<boolean>(false);
    const sortedAndFilteredTickets: ITicket[] = useTickets(
        tickets,
        filter.sort,
        filter.chx,
    );

    const [fetchTickets, isTicketsLoading] = useFetching(async () => {
        const response = await TicketService.getAll();
        setTickets([...response]);
    });

    useEffect(() => {
        setTicketsLimit(5);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter]);

    useEffect(() => {
        fetchTickets();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 300) {
            setShowScrollBtn(true);
        } else {
            setShowScrollBtn(false);
        }
    });

    return (
        <div className={cl.TicketPage}>
            <Filter
                title="Количество пересадок"
                filter={filter}
                onFilterChange={setFilter}
            />
            <div className={cl.TicketPage__container}>
                <Tabs filter={filter} onSortChange={setFilter} />
                {isTicketsLoading && <Loader />}
                <List
                    items={sortedAndFilteredTickets.filter(
                        (i, index) => index < ticketsLimit,
                    )}
                    renderItem={(ticket: ITicket, index) => (
                        <Ticket item={ticket} key={`ticket-${index}`} />
                    )}
                />
                {ticketsLimit < sortedAndFilteredTickets.length && (
                    <MyButton onClick={() => setTicketsLimit(ticketsLimit + 5)}>
                        показать еще билеты!
                    </MyButton>
                )}
                <MyScroll
                    isShow={showScrollBtn}
                    onClick={() => scroll.scrollToTop()}
                />
            </div>
        </div>
    );
};

export default TicketPage;
