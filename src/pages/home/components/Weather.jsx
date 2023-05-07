import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { FastForward } from '@mui/icons-material';

export default function Weather() {
    return (
        <Card sx={{ width: "448px", height: "310px", backgroundColor: "#D9D9D9BF", borderRadius:3}}>
            <CardContent sx={{ marginLeft:5, paddingBottom:0}}>
                <Typography sx={{ fontSize: 24, display: 'inline-block', marginBottom:2 }} >
                    Weather in:  
                    <span style={{ fontWeight: 600}}><u> Albergaria-a-velha</u></span>
                </Typography>
                <div className="flex text-[24px]">
                    <div className='ml-10'>
                        <Typography sx={{ mb: 2.5, fontSize:24 }}>
                            Today
                        </Typography>
                        <svg className="mb-5" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.5 0C30.638 0.169271 29.6224 1.1849 29.4531 3.04688V11.1719C29.6224 13.0339 30.638 14.0495 32.5 14.2188C34.362 14.0495 35.3776 13.0339 35.5469 11.1719V3.04688C35.3776 1.1849 34.362 0.169271 32.5 0ZM32.5 50.7812C30.638 50.9505 29.6224 51.9661 29.4531 53.8281V61.9531C29.6224 63.8151 30.638 64.8307 32.5 65C34.362 64.8307 35.3776 63.8151 35.5469 61.9531V53.8281C35.3776 51.9661 34.362 50.9505 32.5 50.7812ZM61.9531 35.5469C63.8151 35.3776 64.8307 34.362 65 32.5C64.8307 30.638 63.8151 29.6224 61.9531 29.4531H53.8281C51.9661 29.6224 50.9505 30.638 50.7812 32.5C50.9505 34.362 51.9661 35.3776 53.8281 35.5469H61.9531ZM14.2188 32.5C14.0495 30.638 13.0339 29.6224 11.1719 29.4531H3.04688C1.1849 29.6224 0.169271 30.638 0 32.5C0.169271 34.362 1.1849 35.3776 3.04688 35.5469H11.1719C13.0339 35.3776 14.0495 34.362 14.2188 32.5ZM55.4785 13.8379C56.6634 12.3991 56.6634 10.9603 55.4785 9.52148C54.0397 8.33659 52.6009 8.33659 51.1621 9.52148L45.4492 15.2344C44.2643 16.6732 44.2643 18.112 45.4492 19.5508C46.888 20.7357 48.3268 20.7357 49.7656 19.5508L55.4785 13.8379ZM19.5508 45.4492C18.112 44.2643 16.6732 44.2643 15.2344 45.4492L9.52148 51.1621C8.33659 52.6009 8.33659 54.0397 9.52148 55.4785C10.9603 56.6634 12.3991 56.6634 13.8379 55.4785L19.5508 49.7656C20.7357 48.3268 20.7357 46.888 19.5508 45.4492ZM51.1621 55.4785C52.6009 56.6634 54.0397 56.6634 55.4785 55.4785C56.6634 54.0397 56.6634 52.6009 55.4785 51.1621L49.7656 45.4492C48.3268 44.2643 46.888 44.2643 45.4492 45.4492C44.2643 46.888 44.2643 48.3268 45.4492 49.7656L51.1621 55.4785ZM19.5508 19.5508C20.7357 18.112 20.7357 16.6732 19.5508 15.2344L13.8379 9.52148C12.3991 8.33659 10.9603 8.33659 9.52148 9.52148C8.33659 10.9603 8.33659 12.3991 9.52148 13.8379L15.2344 19.5508C16.6732 20.7357 18.112 20.7357 19.5508 19.5508ZM32.5 46.7188C36.5625 46.6341 39.9056 45.2376 42.5293 42.5293C45.2376 39.9056 46.6341 36.5625 46.7188 32.5C46.6341 28.4375 45.2376 25.0944 42.5293 22.4707C39.9056 19.7624 36.5625 18.3659 32.5 18.2812C28.4375 18.3659 25.0944 19.7624 22.4707 22.4707C19.7624 25.0944 18.3659 28.4375 18.2812 32.5C18.3659 36.5625 19.7624 39.9056 22.4707 42.5293C25.0944 45.2376 28.4375 46.6341 32.5 46.7188Z" fill="#EAE117" />
                        </svg>
                        <Typography sx={{ mb: 1.5, fontSize:20, display: 'inline-block'}}>
                            <span style={{ color:"#FF0000" }}>23°</span> 
                            / 
                            <span style={{ color:"#0084AD" }}>16°C</span>
                        </Typography>
                    </div>
                    <div className='ml-10'>
                        <Typography sx={{ mb: 2.5, fontSize:24  }}>
                            Tomorrow
                        </Typography>
                        <svg className="mb-5 ml-5" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1875 40.6397C8.71745 40.555 5.83984 39.3697 3.55469 37.0837C1.26953 34.7977 0.0846354 31.9191 0 28.4478C0.0846354 25.7385 0.888672 23.3255 2.41211 21.2088C3.93555 19.1769 5.92448 17.7375 8.37891 16.8909C8.20964 16.0442 8.125 15.1552 8.125 14.2239C8.20964 10.1599 9.60612 6.81562 12.3145 4.19097C14.9382 1.48166 18.2812 0.084666 22.3438 0C25.1367 0 27.6335 0.719661 29.834 2.15898C32.0345 3.51364 33.7272 5.33396 34.9121 7.61994C36.8587 5.33396 39.4401 4.14864 42.6562 4.06397C45.5339 4.14864 47.946 5.1223 49.8926 6.98495C51.7546 8.93227 52.7279 11.3452 52.8125 14.2239C52.8125 14.9012 52.7279 15.5786 52.5586 16.2559H52.6855H52.8125C56.2826 16.3405 59.1602 17.5259 61.4453 19.8119C63.7305 22.0978 64.9154 24.9765 65 28.4478C64.9154 31.9191 63.7305 34.7977 61.4453 37.0837C59.1602 39.3697 56.2826 40.555 52.8125 40.6397H12.1875ZM10.4102 44.9577C12.0182 45.8043 12.526 47.1167 11.9336 48.8946L5.83984 63.1185C4.99349 64.8119 3.68164 65.3622 1.9043 64.7695C0.211589 63.9229 -0.338542 62.6105 0.253906 60.8326L6.34766 46.6087C7.27865 44.9153 8.63281 44.365 10.4102 44.9577ZM25.6445 44.9577C27.2526 45.8043 27.7604 47.1167 27.168 48.8946L21.0742 63.1185C20.2279 64.8119 18.916 65.3622 17.1387 64.7695C15.446 63.9229 14.8958 62.6105 15.4883 60.8326L21.582 46.6087C22.513 44.9153 23.8672 44.365 25.6445 44.9577ZM56.6211 48.8946L50.5273 63.1185C49.681 64.8119 48.3691 65.3622 46.5918 64.7695C44.8991 63.9229 44.349 62.6105 44.9414 60.8326L51.0352 46.6087C51.9661 44.9153 53.3203 44.365 55.0977 44.9577C56.7057 45.8043 57.2135 47.1167 56.6211 48.8946ZM39.8633 44.9577C41.4714 45.8043 41.9792 47.1167 41.3867 48.8946L35.293 63.1185C34.4466 64.8119 33.1348 65.3622 31.3574 64.7695C29.6647 63.9229 29.1146 62.6105 29.707 60.8326L35.8008 46.6087C36.7318 44.9153 38.0859 44.365 39.8633 44.9577Z" fill="url(#paint0_linear_79_27)" />
                            <defs>
                                <linearGradient id="paint0_linear_79_27" x1="-8.5" y1="40" x2="-8.5" y2="43.5" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#747474" />
                                    <stop offset="1" stopColor="#00B9C5" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <Typography sx={{ mb: 1.5,ml:2, fontSize:20, display: 'inline-block'}}>
                            <span style={{ color:"#FF0000" }}>20°</span> 
                            / 
                            <span style={{ color:"#0084AD" }}>15°C</span>
                        </Typography>

                    </div>
                </div>
            </CardContent>
            <CardActions className="justify-end mr-[10px]">
                <Link href="http://climetua.fis.ua.pt/weather/temperature/aveiro" target="_blank" sx={{ color: "black" }}>
                    <u>
                    More Info
                    <FastForward />
                    </u>
                </Link>
            </CardActions>
        </Card>
    );
}

