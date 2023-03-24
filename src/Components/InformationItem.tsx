import clsx from "clsx";

type PropsType = {
	content: string;
	title: string;
	wrapClass?: string;
	titleClass?: string;
	contentClass?: string;
	classes: {
		wrap?: string;
		title?: string;
		content?: string;
	};
};

const InformationItem = ({
	content,
	title,
	wrapClass,
	titleClass,
	contentClass,
	classes,
}: PropsType) => {
	return (
		<div className={clsx(classes.wrap, wrapClass)}>
			<div className={clsx(classes.title, titleClass)}>{title}</div>
			<div className={clsx(classes.content, contentClass)}>{content}</div>
		</div>
	);
};

export default InformationItem;
