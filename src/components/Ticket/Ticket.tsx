import React, { FC } from "react";
import { ITicket } from "../../types/types";
import getDuration from "../../utils/getDuration";
import getNumCapEnd from "../../utils//getNumCapEnd";
import cl from "./Ticket.module.scss";
import { getTime } from "../../utils/getTime";

interface TicketProps {
	item: ITicket;
}

const Ticket: FC<TicketProps> = ({ item }) => {
	const imgUrl: string = `//pics.avs.io/99/36/${item.carrier}.png`;
	const stopsTitle = (stops: string[]): string =>
		`${stops.length} ${getNumCapEnd(
			{
				one: "пересадка",
				two: "пересадки",
				few: "пересадок",
			},
			stops.length,
		)}`;

	return (
		<div className={cl.ticket}>
			<div className={cl.ticket__header}>
				<div className={cl.ticket__price}>
					{new Intl.NumberFormat("ru-RU", {
						style: "currency",
						currency: "RUB",
						minimumFractionDigits: 0,
					}).format(item.price)}
				</div>
				<div className={cl.ticket__carrier}>
					<img src={imgUrl} alt={item.carrier} />
				</div>
			</div>
			<div className={cl.ticket__content}>
				{item.segments.map(
					({ origin, destination, date, stops, duration }, index) => (
						<div className={cl.ticket__row} key={`ticket-${index}`}>
							<div className={cl.ticket__wrapper}>
								<div className={cl.ticket__title}>
									{`${origin} - ${destination}`}
								</div>
								<div className={cl.ticket__data}>
									{getTime(date, duration)}
								</div>
							</div>
							<div className={cl.ticket__wrapper}>
								<div className={cl.ticket__title}>В пути</div>
								<div className={cl.ticket__data}>
									{getDuration(duration)}
								</div>
							</div>
							<div className={cl.ticket__wrapper}>
								<div className={cl.ticket__title}>
									{stopsTitle(stops)}
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
