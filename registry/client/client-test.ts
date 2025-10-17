import client from "./client";

async function testConnectivity() {
    try {
        const response = await client.testConnectivity();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

testConnectivity();