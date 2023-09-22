import styled from "styled-components";

export const StyleSwitchInput = styled.input`
	width: 0;
	height: 0;
	visibility: hidden;
`;

export const StyleSwitchLabel = styled.label`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	width: 3rem;
	height: 1.5rem;
	border-radius: 100px;
	border: 2px solid gray;
	position: relative;
	transition: background-color 0.2s;
`;

export const StyleSwitchButton = styled.button`
	content: "";
	position: absolute;
	top: 2px;
	left: 2px;
	width: 1.2rem;
	height: 1.2rem;
	border-radius: 2.8rem;
	transition: 0.2s;
	background: grey;
	box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
	
	${StyleSwitchInput}:checked + ${StyleSwitchLabel} & {
		left: calc(100% - 2px);
		transform: translateX(-100%);
	}

	${StyleSwitchLabel}:active & {
		width: 1.5rem;
  }
`;

