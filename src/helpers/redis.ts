const upstashRedisRESTURL = process.env.UPSTASH_REDIS_REST_URL;
const upstashRedisRESTToken = process.env.UPSTASH_REDIS_REST_TOKEN;

type Command = "zrange" | "sismember" | "get" | "smembers";

export async function fetchRedis(command: Command, ...args: (string | number)[]) {
    const commandURL = `${upstashRedisRESTURL}/${command}/${args.join("/")}`;
    const response = await fetch(commandURL, { headers: { Authorization: `Bearer ${upstashRedisRESTToken}` }, cache: "no-store" });
    if (!response.ok) throw new Error(`Error executing Redis command: ${response.statusText}`);
    const data = await response.json();
    return data.result;
};