import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";
import { useState } from "react";

const Comments = () => {
    const[liked,setLiked]=useState(false);
	return (
		<>
			<Flex gap={4} py={2} my={2} w={"full"}>
				<Avatar src="/zuck-avatar.png" size={"sm"} />
				<Flex gap={1} w={"full"} flexDirection={"column"}>
					<Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
						<Text fontSize='sm' fontWeight='bold'>
							pb7
						</Text>
                        <Flex gap={2} alignItems={"center"}>
                            <Text fontSize={"sm"} color={"gray.light"}>1d</Text>
                            <BsThreeDots/>
                        </Flex>
					</Flex>
					<Text>oye hoye</Text>
                    <Actions  liked={liked} setLiked={setLiked}/>
                    <Text fontSize={"small"} color={"gray.light"}>
                    {0 + (liked ? 1 :0)} likes

                    </Text>
				</Flex>
			</Flex>

            <Divider/>
			
		</>
	);
};

export default Comments;
