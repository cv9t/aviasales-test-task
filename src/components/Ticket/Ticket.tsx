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
								<div className={cl.ticket__route}>
									${origin} - ${destination}
								</div>
								<div className={cl.ticket__date}>${date}</div>
							</div>
							<div className={cl.ticket__wrapper}>
								<div className={cl.ticket__durationTitle}>
									В пути
								</div>
								<div className={cl.ticket__duration}>
									${duration}
								</div>
							</div>
							<div className={cl.ticket__wrapper}>
								<div className={cl.ticket__stopsTitle}>
									${stops.length} пересадки
								</div>
								<div className={cl.ticket__stops}>
									${stops.join(", ")}
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
