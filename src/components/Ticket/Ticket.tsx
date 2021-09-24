import React, { FC } from "react";
import { ITicket } from "../../types/types";
import cl from "./Ticket.module.scss";

interface TicketProps {
	item: ITicket;
}

const Ticket: FC<TicketProps> = ({ item }) => {
	const imgUrl: string = `//pics.avs.io/99/36/${item.carrier}.png`;

	return (
		<div className={cl.ticket}>
			<div className={cl.ticket__header}>
				<div className={cl.ticket__price}>{item.price}</div>
				<div className={cl.ticket__carrier}>
					<img src={imgUrl} alt={item.carrier} />
				</div>
			</div>
			<div className={cl.ticket__content}>
				{item.segments.map(
					({ origin, destination, date, stops, duration }) => (
						<div className={cl.ticket__row}>
							<div className={cl.ticket__wrapper}>
								<div className={cl.ticket__title}>
									{origin} - {destination}
								</div>
								<div className={cl.ticket__data}>{date}</div>
							</div>
							<div className={cl.ticket__wrapper}>
								<div className={cl.ticket__title}>В пути</div>
								<div className={cl.ticket__data}>
									{duration}
								</div>
							</div>
							<div className={cl.ticket__wrapper}>
								<div className={cl.ticket__title}>
									{stops.length} пересадки
								</div>
								<div className={cl.ticket__data}>
									{stops.join(", ")}
								</div>
							</div>
						</div>
					),
				)}
			</div>
		</div>
	);
};

export default Ticket;
